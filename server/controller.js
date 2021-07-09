const connection = require('../database/connection.js');

const controllers = {
  getAll: function(req, res) {
    let queryStr = 'SELECT users.username, images.id, images.mainUrl, images.caption, images.price, images.brand, images.style, images.love, images.likeIt, images.improveIt, images.dislikeIt FROM users INNER JOIN images on images.userId = users.id';

    connection.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(results.rows);
      }
    })
  },

  getUser: function(req, res) {
    let {username} = req.params;
    let queryStr = `SELECT * FROM users WHERE users.username = ${username}`;

    connection.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  }
};

module.exports = controllers;