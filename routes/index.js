var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sanzhar' });
});

router.get('/single', function(req, res, next) {
    res.render('single', { title: 'Sanzhar' });
});


module.exports = router;
