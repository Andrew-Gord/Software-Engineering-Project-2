const { validationResult } = require('express-validator');

const Review = require('../models/review');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Review.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postReview = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const book = req.body.book;
  const user = req.body.user;
  const title = req.body.title;
  const body = req.body.body;

  try {
    const post = {
      book: book,
      user: user,
      title: title,
      body: body,
    };
    const result = await Review.save(post);
    res.status(201).json({ message: 'Posted!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};