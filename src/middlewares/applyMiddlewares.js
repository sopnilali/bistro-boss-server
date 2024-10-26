
const cors = require('cors');
const express = require('express');

const applyMiddlewares = (app)=>{
    app.use(express.json());
    app.use(cors({
        origin: [ 
            'https://bistro-boss-client-nu.vercel.app',
            'http://localhost:5174'
        ]
    }))

}

module.exports = applyMiddlewares;