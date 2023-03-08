const db = require('../util/database');

module.exports = class Review {
  constructor(book, user, title, body) {
    this.book = book;
    this.user = user;
    this.title = title;
    this.body = body;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM posts.userReviews');
  }

  static save(post) {
    return db.execute(
      'INSERT INTO posts.userReviews (book, user, title, body)  VALUES (?, ?, ?, ?)',
      [post.book, post.user, post.title, post.body]
    );
  }

};
