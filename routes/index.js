var express = require('express');
var router = express.Router();

const landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.getLanding);

module.exports = router;
