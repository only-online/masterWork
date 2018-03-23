var express = require('express');
var router = express.Router();
var sequalize1 = require('../config/dbconnect.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sanzhar' });
});

router.get('/single', function(req, res, next) {
    res.render('single', { title: 'Sanzhar' });
});

router.get('/archive', function(req, res, next) {
    res.render('archive', { title: 'Sanzhar' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Sanzhar' });
});

router.get('/textarea', function(req, res, next) {
    sequalize1.authenticate().then(() => {
        console.log('Connection has been established successfully.');
}).catch(err => {
        console.log('Unable to connect to the database:', err);
});

});

});


module.exports = router;
