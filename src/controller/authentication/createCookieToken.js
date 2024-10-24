const generateToken = require("../../utils/generateToken");

const createCookieToken = (req, res, next)=> {
    const user = req.body;
    console.log('user for token', user);
      const token =  generateToken(user);
      console.log(token)
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    })
    .send({success: true});
}

module.exports = createCookieToken