const express = require('express');
const bodyParser = require('body-parser');
const generateRoutes = require('./routes/generateRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', generateRoutes);

module.exports = app;
