require("../db/db")
const express = require("express");
const bookRouter = require("../routes/book");
const app = express()
const db = require("../db/db")
const seed = require("../db/seed")

const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/books", bookRouter)

seed();

app.listen(5002, () => {
    console.log("Backend listening on port 5002")
})
