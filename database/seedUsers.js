const fs = require ('fs');
const client = require('./connection.js');
const fastcsv = require('fast-csv');

let stream = fs.createReadStream('database/data/users.csv');
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on('data', function(data) {
    csvData.push(data);
  })
  .on('end', function() {
    csvData.shift();

    const queryStr = "INSERT INTO users (firstName, lastName, email, username, password) VALUES ($1, $2, $3, $4, $5)";

    csvData.forEach(row => {
      client.query(queryStr, row, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log('inserted ' + res.rowCount + ' row:', row)
        }
      })
    });
  })

stream.pipe(csvStream);


// const connection = require('./connection.js');

// const users = [
//   ["Miranda", "Priestly", "PradaDevil@vogue.com", "MirandaPriestly", "vogue123"] ,
//   ["Melania", "Trump", "HelpMe@trump.com", "MelaniaTrump", "trump"],
//   ["Justin", "Bieber", "JustinBieber@jb.com", "JustinBieber", "peaches"],
//   ["Lady", "Gaga", "LadyGaga@slay.com", "LadyGaga","ladygaga"],
//   ["Austin","Yeon", "austiny@hrlax.com", "AustinYeon","hrlax44"]
// ];

// const seeder = () => {
//   users.forEach(user => {
//     let queryString = `INSERT INTO users (firstName, lastName, email, username, password) VALUES ($1, $2, $3, $4, $5)`;

//     connection.query(queryString, users, (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('successfully seeded!')
//       }
//     });
//   });
// };

// seeder();