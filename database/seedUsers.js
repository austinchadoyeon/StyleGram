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

    const queryStr = "INSERT INTO users (id, firstName, lastName, email, username, password) VALUES ($1, $2, $3, $4, $5, $6)";

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