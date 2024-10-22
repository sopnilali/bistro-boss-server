const express = require('express')
const cors = require('cors')
const { LOCAL_URL, CLIENT } = require('./config/config')
const applyMiddlewares = require('./middlewares/applyMiddlewares')
const connectDB = require('./db/connectDB')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
// Enable CORS for all routes

// middleware routes start
applyMiddlewares(app)
// middleware routes end

// all routes start

app.get('/', function (req, res) {
    res.send('Welcome to bistro boss server!')
})

// all routes end

const main = async()=> {
    await connectDB();
    app.listen(port, function () {
        console.log(`web server listening on port ${port}`)
      })
}

main().catch(err=> console.log(err));
