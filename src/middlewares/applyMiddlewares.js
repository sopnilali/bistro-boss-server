
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const applyMiddlewares = (app)=>{
    app.use(express.json());
    app.use(cors({
        origin: [ 
            'https://bistro-boss-client-nu.vercel.app',
            'http://localhost:5173'
        ],
        credentials: true
    }))
    app.use(cookieParser())

}

module.exports = applyMiddlewares;