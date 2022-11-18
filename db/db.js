// const { Sequelize } = require("sequelize")
// const path = require("path")

// const db = new Sequelize({
//     dialect: "sqlite",
//     storage: path.join(__dirname, "theLibrary.sqlite"),
//     logging: false
// })

// module.exports = db

require("dotenv").config()
const mongoose = require("mongoose")

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

connection()
