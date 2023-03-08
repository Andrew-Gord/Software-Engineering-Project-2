const express = require('express');

const bookController = require('../controllers/books');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, bookController.fetchAll);

module.exports = router;
