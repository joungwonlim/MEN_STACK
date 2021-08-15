const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('/api/inde.js')
});

router.use('/users', require('./users'));

module.exports = router;