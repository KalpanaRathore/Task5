const express = require('express');
const router = express.Router();
const { forgotPassword } = require('../routes/forgotPasswordController');

router.post('/', forgotPassword);

module.exports = router;
