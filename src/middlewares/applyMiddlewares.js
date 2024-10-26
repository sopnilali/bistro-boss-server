
const cors = require('cors');
const express = require('express');
const { LOCAL_URL, CLIENT } = require('../config/config');

const applyMiddlewares = (app)=>{
    app.use(express.json());
    app.use(cors({
        origin: [ 
            'https://bistro-boss-client-nu.vercel.app',
            'http://localhost:5173'
        ]
    }))

}

module.exports = applyMiddlewares;