const db = require('../util/database');

module.exports = class Book {
  constructor(title, author, image, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.image = image;
    this.link = link;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM posts.books');
  }
};
