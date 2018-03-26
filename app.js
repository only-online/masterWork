var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
var Sequelize = require('sequelize');
var config = require('./config-data/config');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs( {
    extname: 'hbs',
    //defaultLayout: 'views',
    //layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/block/'
} ) );
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));
app.use('/', index);
//app.use('/single', single);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var sequelize = new Sequelize(config.connectArray.database, config.connectArray.user_name, config.connectArray.password, {
    host: config.connectArray.host,
    dialect: config.connectArray.dialect,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.close();
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});


module.exports = app;
