const express = require('express');

const { body } = require('express-validator');

const leaderboardController = require ('../controllers/event');

const auth =  require('../middleware/auth');

const router = express.Router();

router.get('/', auth, leaderboardController.fetchall);

router.post(
    '/',
    [
      auth,
    ],
    leaderboardController.postLeaderboard
  );


module.exports = router;