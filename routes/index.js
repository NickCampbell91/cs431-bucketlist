const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/users', require('./user'));
router.use('/bucket', require('./bucket'));

module.exports = router;