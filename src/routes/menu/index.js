const express = require('express');
const menu = require('../../models/menu');
const verifyTaken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const router = express.Router()

router.get('/api/menu', async(req, res)=> {
    const result = await menu.find();
    res.send(result);
})

router.get('/api/details-menu/:id', async(req, res)=> {
    const result = await menu.findById(req.params.id);
    res.send(result);
})

router.post('/api/menu', verifyTaken, verifyAdmin, async(req, res)=> {
    const memuItem = req.body
    const result = await menu.create(memuItem)
    res.send(result)
    
})

router.patch('/api/menu', async(req, res)=> {
    const query = {_id: req.query.id}
    const options = {upsert: true}
    const updateDoc = {
        $set: {
            name: req.body.name,
            price: req.body.price,
            recipe: req.body.recipe,
            image: req.body.image,
            category: req.body.category,
        }
    }
    const result = await menu.updateOne(query, updateDoc, options)
    res.send(result)
})

router.delete('/api/menu', async(req, res)=> {
    const query = {_id: req.query.id}
    const result = await menu.deleteOne(query)
    res.send(result)
})

module.exports = router