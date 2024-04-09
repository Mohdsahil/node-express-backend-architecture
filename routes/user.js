const express = require('express');
const router = express.Router();
const userControler =  require('../controllers/user');

router.post('/user', userControler.signUp);

module.exports = router;