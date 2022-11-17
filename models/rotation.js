const {Sequelize, DataTypes, Model} = require("sequelize")
const db = require("../db/db")

class Rotation extends Model {}

Rotation.init({
    x : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    y: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    z: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db
})

module.exports = Rotation;
