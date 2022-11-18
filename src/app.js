require("../db/db")
const express = require("express");
const bookRouter = require("../routes/book");
const app = express()
const db = require("../db/db")
const seed = require("../db/seed")
const port = process.env.PORT || 5002
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/books", bookRouter)

seed();

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})
