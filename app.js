var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);

var logger = require('morgan');
global.post = require('./lib/mongo/mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var update = require('./routes/update');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// app.set('view engine', 'ejs');
app.engine('html', require("ejs").__express);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({
  secret: 'blog',
  store: new mongoStore({
    port: '3001',
    host: '127.0.0.1',
    db: 'blog',
    url: 'mongodb://127.0.0.1:27017/blog'
  }),
  name: 'myblog',
  cookie: { maxAge: 80000 },
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib', express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/update', update);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err, '-----0000----')
  // render the error page
  res.status(err.status || 500).send({
    message: 'error'
  });
});

module.exports = app;
