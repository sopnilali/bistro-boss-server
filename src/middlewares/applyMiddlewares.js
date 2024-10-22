const { LOCAL_URL, CLIENT } = require("../config/config")
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const applyMiddlewares = (app)=>{
    app.use(express.json());
    app.use(cors({
        origin: [ 
            'http://localhost:5173',
            'https://bistro-boss-client-nu.vercel.app'
        ],
        credentials: true
    }))
    app.use(cookieParser())

}

module.exports = applyMiddlewares;