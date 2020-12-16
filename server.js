require('dotenv/config');

const express = require('express');
const app = express();

// general middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(require('cors')());

// database setup
global.db = require('./database');

// routes
app.use('/', require('./routes'));

// server initialization
const http = require('http').Server(app);
http.listen(3030, () => console.log('Listening on *:3030'));
