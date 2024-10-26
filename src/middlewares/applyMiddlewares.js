
const cors = require('cors');
const express = require('express');
const { LOCAL_URL, CLIENT } = require('../config/config');

const applyMiddlewares = (app)=>{
    app.use(express.json());
    app.use(cors({
        origin: [ 
            CLIENT,
            LOCAL_URL
        ]
    }))

}

module.exports = applyMiddlewares;