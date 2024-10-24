const jwt = require('jsonwebtoken');
const user = require('../models/user');
//dot environment config
require('dotenv').config()


const verifyAdmin = (req, res, next) => {
    const email = req.decoded.email
    console.log(email)
    // if (!email) {
    //     return res.status(401).send({ message: 'forbidden access' })
    // }
    // console.log('Admin Mail', email);
    // const query = { email: email }
    // const findUser = user.findOne(query)
    // const isAdmin = findUser.role === 'admin'
    // if (!isAdmin) {
    //     return res.status(403).send({ message: 'Admin access only' })
    // }
    next();
}

module.exports = verifyAdmin