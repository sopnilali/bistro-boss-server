
//dot environment config
require('dotenv').config()

const config = {
    LOCAL_URL : process.env.LOCAL_URL,
    CLIENT : process.env.CLIENT_URL,
}

module.exports = config