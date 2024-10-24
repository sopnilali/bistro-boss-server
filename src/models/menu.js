const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
})

const menu = model('menu', menuSchema)

module.exports = menu;