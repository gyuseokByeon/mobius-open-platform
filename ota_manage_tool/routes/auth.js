var router = require('express').Router();
var authController = require('../controllers/authController');

router.post('/', authController.userAuthenticate);

router.post('/re', authController.reIssueToken);

router.delete('/', authController.userSignOut);

router.get('/info', function(req, res, next) {
  var info = {};
  info.serviceUrl = CONFIG.domains;

  res.status(200).json(info);
})
module.exports = router;