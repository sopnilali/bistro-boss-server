const express = require('express')
const applyMiddlewares = require('./middlewares/applyMiddlewares')
const connectDB = require('./db/connectDB')
const globalRoutes = require('./routes/global')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

const menuRoutes = require('./routes/menu')
const reviewRoutes = require('./routes/review')


// middleware routes start
applyMiddlewares(app)
// middleware routes end

// all routes start
app.use(menuRoutes)
app.use(reviewRoutes)



// // // global routes start
globalRoutes(app)
// // global routes end


const main = async()=> {
    await connectDB();
    app.listen(port, function () {
        console.log(`web server listening on port ${port}`)
      })
}

main().catch(err=> console.log(err));
