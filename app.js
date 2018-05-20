const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const http = require('http');
const fs = require('fs');
// const options = {
//     key: fs.readFileSync('./keys/server.key'),
//     cert: fs.readFileSync('./keys/server.crt'),
//     passphrase: 'nobuntu'
// };
const mongoose = require('mongoose');

const index = require('./routes/index');
const users = require('./routes/users');
const reque = require('./routes/request');
const chat  = require('./routes/chat');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const mongodbUri = "mongodb://localhost/angelhack2018";
const mongOptions = {
  useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
};

// ポート設定
app.set('port', process.env.PORT || 3000);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/request', reque);
app.use('/chat', chat);

// セッション管理
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
	maxAge: null // ブラウザを閉じた時にセッションを破棄
    }
}));

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

// サーバ立ち上げ
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    mongoose.connect('mongodb://localhost/angelhack2018');
});

module.exports = app;
