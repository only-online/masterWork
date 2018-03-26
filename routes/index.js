var express = require('express');
var router = express.Router();
var sequalize = require('sequelize');
var configData = require('../config-data/config');

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


    res.render('textarea', { title: configData.connectArray.host });

});



module.exports = router;
