
const jwt = require('jsonwebtoken');
//dot environment config
require('dotenv').config()

const verifyTaken = (req, res, next)=> {
  const authorization = req.headers.authorization;
  if (!authorization){
    return res.status(401).send({message: 'unauthorized access'})
  }
    // bearer token
    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({ error: true, message: 'unauthorized access' })
      }
      req.decoded = decoded;
      next()
    })
   
}

module.exports = verifyTaken;