const express = require('express');
const review = require('../../models/review');
const router = express.Router()

router.get('/api/review', async(req, res)=>{
    const result = await review.find();
    res.send(result);
})

router.post('/api/review', async(req, res)=>{
    const reviewItem = req.body
    const result = await review.create(reviewItem)
    res.send(result);
})

module.exports = router;