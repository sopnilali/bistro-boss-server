
const jwt = require('jsonwebtoken');
//dot environment config
require('dotenv').config()

const verifyTaken = (req, res, next)=> {
  const token = req?.cookies?.token
  if (!token){
    return res.status(401).send({message: 'unauthorized access'})
  }
  jwt.verify(token, process.env.ACCESS_SECRET_KEY, ( err, decoded)=> {
    if(err){
      return res.status(403).send({message: 'invalid token'})
    }
    req.user = decoded;
    next();
  })
}

module.exports = verifyTaken;