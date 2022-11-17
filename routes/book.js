const express = require("express");
const db = require("../db/db");
const {Book, Position, Rotation} = require("../models")

const bookRouter = express.Router();

bookRouter.get("/sync", async (request, response) => {
    await db.sync({force: true})
    response.status(200).send("Database Synced")
})

bookRouter.get("/", async (request, response) => {
    try {
        const allBooks = await Book.findAll(include: [Position, Rotation]);
        if (allBooks === []) {
            throw new Error("The library is empty...")
        }
        response.status(200).send(allBooks)
    } catch (error) {
        response.status(400).send(error.message)
    }
})

bookRouter.get("/:bookID", async (request, response) => {
    try {
        const chosenBook = await Book.findOne({where: {id: request.params.bookID}});
        if (chosenBook === null) {
            throw new Error("This book doesn't exist")
        }
        response.status(200).send(chosenBook)
    } catch (error) {
        response.status(404).send(error.message)
    }
})

bookRouter.post("/", async (request, response) => {
    try {
        console.log(request.body)
        const chosenBook = await Book.create(request.body);
        response.status(200).send(chosenBook)
    } catch (error) {
        response.status(500).send(error.message)
    }
})

bookRouter.post("/coords/:bookID", async (request, response) => {
    try {
        const foundBook = await Book.findOne({where: {id: request.params.bookID}})
        const pos = await Position.create(request.body.position)
        const rot = await Rotation.create(request.body.rotation)
        await foundBook.createPosition(pos)
        await foundBook.createPosition(rot)

        response.send(200).send(foundBook)
    } catch (error) {
        response.status(500).send(error.message)
    }
})

module.exports = bookRouter;
