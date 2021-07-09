const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/rateAFit')
    .get(controller.getAll)

router
  .route('/login/:username')
    .get(controller.getUser)

router
  .route('/home/:username')
    .get(controller.getUserHome)

module.exports = router;