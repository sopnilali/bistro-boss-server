const express = require('express');
const user = require('../../models/user');
const verifyTaken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');

const router = express.Router();

router.post('/api/users', async (req, res) => {
    const userData = req.body;
    const query = { email: userData.email }
    const userExists = await user.findOne(query)
    if (userExists) {
        return res.send({ message: 'User already exists', insertedId: null })
    }
    const result = await user.create(userData)
    res.send(result)
})

router.get('/api/users', verifyTaken, verifyAdmin, async (req, res) => {
    const result = await user.find();
    res.send(result);
})

router.get('/api/users/admin', verifyTaken, async (req, res) => {
    const email = req.query.email
    const query = { email: email }
    const userRole = await user.findOne(query)
    let admin = false
    if (userRole) {
        admin = userRole.role === 'admin'
    }
    res.send({ admin });
})


router.patch('/api/users/admin', verifyTaken, verifyAdmin, async (req, res) => {
    const id = req.query.id;
    const query = { _id: id };
    const updateDoc = {
        $set: {
            role: 'admin'
        }
    }
    const result = await user.updateOne(query, updateDoc)
    res.send(result)
})

router.delete('/api/users', verifyTaken, verifyAdmin, async (req, res) => {
    const query = { _id: req.query.id }
    const result = await user.deleteOne(query)
    res.send(result)
})



module.exports = router