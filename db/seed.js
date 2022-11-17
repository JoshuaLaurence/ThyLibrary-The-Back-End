const {Book, Position, Rotation} = require("../models")
const db = require("./db")
const generateCoOrds = require("./coords")

async function seed() {
    await db.sync({force: true})

    // await Book.bulkCreate([
    //     {
    //         title: "Billy Summers",
    //         author: "Stephen King",
    //         genre: "Thriller"
    //     },
    //     {
    //         title: "Under The Dome",
    //         author: "Stephen King",
    //         genre: "Thriller"
    //     },
    //     {
    //         title: "Time Travelers Never Die",
    //         author: "Jack McDevitt",
    //         genre: "Sci-Fi"
    //     },
    //     {
    //         title: "The Dice Man",
    //         author: "Luke Rhinehart",
    //         genre: "Satire"
    //     },
    //     {
    //         title: "Fairy Tale",
    //         author: "Stephen King",
    //         genre: "Fiction"
    //     },
    //     {
    //         title: "idk",
    //         author: "Stephen King",
    //         genre: "Fiction"
    //     },
    // ])

    for (let i = 0; i < 100; i++) {
        const newBook = await Book.create({
            title: `newBook-${i+1}`,
            author: "AnAuthor"
        })
        const results = await generateCoOrds()
        console.log(results)
        const pos = await Position.create(results[0])
        const rot = await Rotation.create(results[1])

        console.log()
        await newBook.setPosition(pos)
        await newBook.setRotation(rot)
    }
};

module.exports = seed;
