const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');


// MiddleWares
app.use('/', require('./routes'));

// app.listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
});

module.exports = app;