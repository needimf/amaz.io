const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

let app = express();

require('./config/database');

app.use(logger('dev'));

// Configure both serve-favicon and static middlewares
// to serve from the production build folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// API routes
app.use('/api', require('./routes/api'));

// Client-side catch all route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = 3001;

app.listen(port, () => {
  console.log(`Express app running on port ${port}`)
});