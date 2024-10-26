const express = require('express');
const cart = require('../../models/cart');
const verifyTaken = require('../../middlewares/verifyToken');

const router = express.Router()

router.post('/api/cart',  async (req, res) => {
    const cartItem = req.body
    const query = {menuId: cartItem.menuId}
    const existMenuID = await cart.findOne(query)
    if(existMenuID){
        console.log({message: 'cart already exists'})
        return res.send({ message: 'cart already exists', insertedId: null })
    }
    const result = await cart.create(cartItem)
    res.send(result)
})

router.delete('/api/cart', verifyTaken, async (req, res) => {
    const query = {id: req.query._id}
    const result = await cart.deleteOne(query)
    res.send(result)
})

router.get('/api/cart', verifyTaken, async (req, res) => {
    const result = await cart.find({email: req.query.email})
    res.send(result)
})

module.exports = router