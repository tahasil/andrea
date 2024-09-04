var express = require('express');
var router = express.Router();
const UserController = require('../../controllers/UserController/User.controller');

/* Middleware */

router.post('/', function (req, res) {
  return UserController.createUser(req, res);
});

router.post('/create-email', function (req, res) {
  return UserController.createEmailDocument(req, res);
});

module.exports = router;
