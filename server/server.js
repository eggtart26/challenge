'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');

// server config
const port = process.env.PORT || 3056;

// register routes
registerRoutes(app);

const path = require('path');
app.use(express.static(path.join(__dirname, '../client/dist')))//return static files
app.use(express.json())

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}


module.exports = start;