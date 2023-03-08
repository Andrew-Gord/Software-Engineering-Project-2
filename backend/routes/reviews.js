const express = require('express');

const { body } = require('express-validator');

const reviewController = require('../controllers/reviews');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, reviewController.fetchAll);

router.post(
  '/',
  [
    auth,
    body('book').trim().isLength({ min: 1 }).not().isEmpty(),
    body('user').trim().isLength({ min: 1 }).not().isEmpty(),
    body('title').trim().isLength({ min: 5}).not().isEmpty(),
    body('body').trim().not().isEmpty(),
  ],
  reviewController.postReview
);

module.exports = router;
