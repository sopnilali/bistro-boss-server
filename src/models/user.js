const { Schema, model } = require("mongoose");


const userSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        photo: {
            type: String,
        },
        role: {
            type: String,
            default: 'user'
        }
    
})

const user = model('users', userSchema)

module.exports = user;