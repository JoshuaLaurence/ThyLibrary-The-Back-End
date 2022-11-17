const {Sequelize, DataTypes, Model} = require("sequelize")
const db = require("../db/db")

class Rotation extends Model {}

Rotation.init({
    x : {
        type: DataTypes.INTEGER,
    },
    y: {
        type: DataTypes.INTEGER,
    },
    z: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize: db
})

module.exports = Rotation;
