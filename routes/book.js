const express = require('express');
const generateCoOrds = require('../db/coords');
const db = require('../db/db');
const seed = require('../db/seed');
const { Book } = require('../models');

const bookRouter = express.Router();

bookRouter.get('/seed', async (request, response) => {
	seed();
	response.status(200).send('Database seeded');
});

bookRouter.get('/sync', async (request, response) => {
	//await db.sync({force: true})
	response.status(200).send('Database Synced');
});

bookRouter.get('/', async (request, response) => {
	try {
		const allBooks = await Book.find({});
		if (allBooks === []) {
			throw new Error('The library is empty...');
		}
		response.status(200).send(allBooks);
	} catch (error) {
		response.status(400).send(error.message);
	}
});

bookRouter.get('/:bookID', async (request, response) => {
	try {
		const chosenBook = await Book.findById(request.params.bookID);
		if (chosenBook === null) {
			throw new Error("This book doesn't exist");
		}
		response.status(200).send(chosenBook);
	} catch (error) {
		response.status(404).send(error.message);
	}
});

bookRouter.post('/', async (request, response) => {
	try {
		const results = await generateCoOrds();
		const pos = { position: results[0] };
		const rot = { rotation: results[1] };
		const data = { ...request.body, ...pos, ...rot };
		const chosenBook = await Book.create(data);
		response.status(200).send(chosenBook);
	} catch (error) {
		response.status(500).send(error.message);
	}
});

bookRouter.post('/delete/:bookID', async (request, response) => {
	try {
		const results = await Book.findByIdAndDelete(request.params.bookID);
		response.status(200).send('Book successfully deleted');
	} catch (error) {
		response.status(500).send(error.message);
	}
});

module.exports = bookRouter;
