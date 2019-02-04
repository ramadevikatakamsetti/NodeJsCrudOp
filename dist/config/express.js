'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _student = require('../app/Student/student.routes');

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var app = (0, _express2.default)();

  app.use(_bodyParser2.default.json({ limit: "5mb" }));
  app.use(_bodyParser2.default.urlencoded({ limit: "5mb", extended: true }));
  // app.use(passport.initialize());
  //strategies.user(passport);
  app.use((0, _cors2.default)());
  // app.use(express.static('./Uploads'))
  //app.use(express.static('./public'));
  app.use(_bodyParser2.default.urlencoded({ limit: "5mb", extended: false }));
  app.use(_bodyParser2.default.json({ limit: "5mb" }));
  // app.use(passport.initialize());
  // strategies.user(passport);

  app.use("/", _student2.default);

  return app;
};