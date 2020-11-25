require('dotenv/config');

const express = require('express');
const app = express();

// firebase setup
const firebase = require("firebase-admin");
firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
    databaseURL: process.env.DATABASE_URL
});

// middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(require('cors')());

// routes
app.use('/', require('./routes')(firebase));

// server initialization
const http = require('http').Server(app);
http.listen(3030, () => console.log('Listening on *:3030'));
