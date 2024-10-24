const Logout = async(req, res, next) => {
    const user = req.body;
    console.log('logout user',  user);
    res.clearCookie('token', {maxAge:0}).send({success: true});
    next();
}

module.exports = Logout;