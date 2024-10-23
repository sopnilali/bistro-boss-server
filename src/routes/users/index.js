const express = require('express');
const user = require('../../models/user');

const router = express.Router();

router.post('/api/users', async (req, res) => {
    const userData = req.body;
    const query = {email : userData.email}
    const userExists = await user.findOne(query)
    if(userExists){
        return res.status(400).send('User already exists')
    }
    const result = await user.create(userData)
    res.send(result)
})

router.get('/api/users', async (req, res) => {
    const result = await user.find();
    res.send(result);
})

module.exports = router