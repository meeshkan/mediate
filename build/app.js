"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _movies = _interopRequireDefault(require("./movies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const logger = (req, _, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
};

function buildApp() {
  const app = express();
  app.use(logger);
  app.use('/movies', (0, _movies.default)());
  return app;
}

var _default = buildApp;
exports.default = _default;
//# sourceMappingURL=app.js.map