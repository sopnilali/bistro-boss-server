const { Schema, model } = require("mongoose");


const cartSchema = new Schema(
    {
        menuId: {
            type: String,
        },
        email: {
            type: String,
        },
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        price: {
            type: Number
        }
    }
)
const cart = model('cart', cartSchema )

module.exports = cart;