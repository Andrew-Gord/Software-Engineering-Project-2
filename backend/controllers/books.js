
const Book = require('../models/book');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Book.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};