const express = require('express');

const { body } = require('express-validator');

const leaderboardController = require ('../controllers/leaderboard');

const auth =  require('../middleware/auth');

const router = express.Router();

router.get('/', auth, leaderboardController.fetchAll);

router.post(
    '/',
    [
      auth,
      body('user').trim().isLength({ min: 1 }).not().isEmpty(),
    ],
    leaderboardController.postLeaderboard
  );


module.exports = router;