const express = require('express');
const { createCookieToken, Logout } = require('../../controller/authentication');

const router = express.Router();

router.post('/api/jwt', createCookieToken)
// router.post('/api/logout', Logout)


module.exports = router