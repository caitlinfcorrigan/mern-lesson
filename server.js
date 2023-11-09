const express= require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database')

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure serve-favicon and static MW
// These server from the prod 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Set port to 3001 so React can use 3000
const port = process.env.PORT || 3001;

// API routes before the "catch all"
// Require & mount router in a single line (prev used 2)
app.use('/api/users', require('./routes/api/users'));

// "Catch all" GET route
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
    console.log(`Express app listening on ${port}`)
});