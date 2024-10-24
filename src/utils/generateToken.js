
const jwt = require('jsonwebtoken');
//dot environment config
require('dotenv').config()

const generateToken = (user) => {
    const token =  jwt.sign(user,  process.env.ACCESS_SECRET_KEY,  {expiresIn:'1h'})
    return token;
  }

module.exports = generateToken;