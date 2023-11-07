const express= require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure serve-favicon and static MW
// These server from the prod 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// "Catch all" GET route
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Set port to 3001 so React can use 3000
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Exp app listening on ${port}`)
});