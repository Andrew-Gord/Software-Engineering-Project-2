const express = require('express');

const { body } = require('express-validator');

const eventController = require ('../controllers/event');

const auth =  require('../middleware/auth');

const router = express.Router();

router.get('/', auth, eventController.fetchall);

router.post(
    '/',
    [
      auth,
      body('title').trim().isLength({ min: 1 }).not().isEmpty(),
      body('rFreq').trim().isLength({ min: 1 }).not().isEmpty(),
    ],
    eventController.postReview
);

module.exports = router;