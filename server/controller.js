const connection = require('../database/connection.js');

const controllers = {
  getAll: function(req, res) {
    let queryStr = 'SELECT users.username, images.mainUrl, images.caption, images.price, images.brand, images.style, images.love, images.likeIt, images.improveIt, images.dislikeIt, comments.comment FROM users INNER JOIN images on images.userId = users.id INNER JOIN comments on comments.imageId = images.id';

    connection.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err)
      } else {
        console.log(results);
        res.status(200).send(results);
      }
    })
  }
};

module.exports = controllers;