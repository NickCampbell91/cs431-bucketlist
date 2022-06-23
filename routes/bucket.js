const express = require('express');
const router = express.Router();

const bucket = require('../controllers/bucket');

router.post('/', bucket.create);
router.get('/', bucket.getAll);

module.exports = router;