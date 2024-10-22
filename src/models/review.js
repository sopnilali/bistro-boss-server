const { Schema, model } = require("mongoose");


const reviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
    }
})

const review = model('review', reviewSchema)

module.exports = review;