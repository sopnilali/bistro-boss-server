const generateToken = require("../../utils/generateToken");

const createCookieToken = (req, res, next) => {
  const user = req.body;
  console.log('user for token', user);
  const token = generateToken(user);
  console.log(token)
  res.send({ token });
}

module.exports = createCookieToken