const express = require('express')
const app = express()
const connectDB = require('./db/connectDB')
const applyMiddlewares = require('./middlewares/applyMiddlewares')
const globalRoutes = require('./routes/global')
const port = process.env.PORT || 3000


//dot environment config
require('dotenv').config()

// routes configuration
const menuRoutes = require('./routes/menu')
const reviewRoutes = require('./routes/review')
const cartRoutes = require('./routes/carts')
const userRoutes = require('./routes/users')
const authenticationRoutes = require('./routes/authentication')


// middleware routes start
applyMiddlewares(app)
// middleware routes end

// all routes start
app.use(menuRoutes)
app.use(reviewRoutes)
app.use(cartRoutes)
app.use(userRoutes)
app.use(authenticationRoutes)
// // // global routes start
globalRoutes(app)
// // global routes end


const main = async()=> {
     await connectDB();
    app.listen(port, function () {
        console.log(`web server listening on port ${port}`)

      })
}

main()
