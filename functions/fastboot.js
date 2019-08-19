const express = require('express');
const fastbootMiddleware = require('fastboot-express-middleware');
const path = require('path');


const app = express();

// use copy of dist in functions dir
const distPath = path.join(__dirname, 'dist');

// handle all GET requests with fastboot
app.get('/*', fastbootMiddleware(distPath));

module.exports = app;
