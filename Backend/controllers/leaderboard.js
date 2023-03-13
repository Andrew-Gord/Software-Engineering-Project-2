const { validationResult } = require('express-validator');

const Leaderboard = require('../models/leaderboard');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Leaderboard.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postLeaderboard = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;
  
  const user = req.body.user;
  const classAdd = req.body.classAdd;
  const dormChoice = req.body.dormChoice;
  const hamVisit = req.body.hamVisit;
  const facilVis = req.body.facilVis;
  const faculCheck = req.body.faculCheck;

  try {
    const post = {
        user: user,
        classAdd: classAdd,
        dormChoice: dormChoice,
        hamVisit: hamVisit,
        facilVis: facilVis,
        faculCheck: faculCheck,
    };
    const result = await Leaderboard.save(post);
    res.status(201).json({ message: 'Posted!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};