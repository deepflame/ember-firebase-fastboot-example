//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');

const fastbootMiddleware = require('fastboot-express-middleware');
const functions = require('firebase-functions');

const app = express();

// This points to the location of your app which is in functions/app
//const distPath = 'app';
const distPath = 'dist';

// This makes all your routes to be served in FastBoot
app.get('/*', fastbootMiddleware(distPath));

// This is necessary so you could serve your apps assets
app.use(express.static(distPath));

exports.fastboot = functions.https.onRequest(app);
