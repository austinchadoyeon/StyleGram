const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router.js');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router)

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})