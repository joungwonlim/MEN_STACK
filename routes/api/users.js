const express = require('express');
const router = express.Router();
const users_ctrl = require('../../controllers/users');

router.get('/', users_ctrl.index);
router.get('/list', users_ctrl.listAll)

module.exports = router;