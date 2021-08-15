const express = require('express');
const router = express.Router();

// router setting
router.get('/', (req, res) => {
  res.send('index.js')
});

router.use('/api', require('./api'));

module.exports = router;