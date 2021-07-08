const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/rateAFit')
    .get(controller.getAll)

module.exports = router;