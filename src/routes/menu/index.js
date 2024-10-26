const express = require('express');
const menu = require('../../models/menu');
const verifyTaken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const router = express.Router()

router.get('/api/menu', async(req, res)=> {
    const result = await menu.find();
    res.send(result);
})

router.post('/api/menu', verifyTaken, async(req, res)=> {
    const memuItem = req.body
    const result = await menu.create(memuItem)
    res.send(result)
    
})

module.exports = router