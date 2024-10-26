const user = require("../models/user");

const verifyAdmin = async(req, res, next) => {
    const email = req.decoded.email;
    console.log(email)
    if(!email){
        return res.status(401).send({ message: 'unauthorize access' })
    }
    const query = { email: email }
    const userRole = await user.findOne(query)
    const isAdmin = userRole?.role === 'admin';
    if (!isAdmin){
        return res.status(403).send({message: 'forbidden access'});
    }
    next()
   
}

module.exports = verifyAdmin;