const express = require('express');
const user = require('../../models/user');

const router = express.Router();

router.post('/api/users', async (req, res) => {
    const userData = req.body;
    const query = {email : userData.email}
    const userExists = await user.findOne(query)
    if(userExists){
        return res.send({message: 'User already exists', insertedId: null})
    }
    const result = await user.create(userData)
    res.send(result)
})

router.get('/api/users', async (req, res) => {
    const result = await user.find();
    res.send(result);
})

router.delete('/api/users', async (req, res) =>{
    const query = {id: req.query._id}
    const result = await user.deleteOne(query)
    res.send(result)
})

module.exports = router