import MovieReviewRoute from './movies';
const express = require('express');

const logger = (req, _, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
};

function buildApp() {
  const app = express();
  app.use(logger);
  app.use('/movies', MovieReviewRoute());
  return app;
}

export default buildApp;
