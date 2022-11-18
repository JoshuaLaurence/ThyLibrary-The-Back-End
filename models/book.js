// const {Sequelize, DataTypes, Model} = require("sequelize")
// const db = require("../db/db")

// class Book extends Model {}

// Book.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     title : {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     author: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     genre: {
//         type: DataTypes.STRING,
//         allowNull: true,
//         defaultValue: "Ungenred"
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: true,
//         defaultValue: "This book has yet to be given a description"
//     }
// }, {
//     sequelize: db
// })

// module.exports = Book;

const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: false,
        default: "Ungenred"
    },
    description: {
        type: String,
        required: false,
        default: "This book has yet to be given a description"
    },
    position: {
        type: Object,
        required: true
    },
    rotation: {
        type: Object,
        required: true
    }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;
