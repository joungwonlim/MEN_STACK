const express = require('express');
const app = express();

// MiddleWares
app.use('/', require('./routes'));

// app.listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
});

module.exports = app;