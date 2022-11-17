const Book = require("./book")
const Rotation = require("./rotation")
const Position = require("./position")

Book.hasOne(Position)
Position.hasOne(Book)

Book.hasOne(Rotation)
Rotation.hasOne(Book)

module.exports = {Book, Position, Rotation}
