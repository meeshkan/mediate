"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var movieReviewApi = _interopRequireWildcard(require("./moviesApi"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const getMovieReviewHandler = async (_, res, next) => {
  try {
    const movies = await movieReviewApi.getReivews();
    return res.send({
      movies
    });
  } catch (err) {
    console.error('Failed fetching movies', err.stack);
    return next(err);
  }
};

const getOneMovie = async (req, res, next) => {
  try {
    const movie = await movieReviewApi.queryMovies(req.params.query);
    return res.send({
      movie
    });
  } catch (err) {
    console.error("Failed fetching movies", err.stack);
    return next(err);
  }
};

function MovieReviewRoute() {
  const router = (0, _express.Router)();
  router.use(_bodyParser.default.json());
  router.get('/reviews', getMovieReviewHandler);
  router.get('/:query', getOneMovie);
  return router;
}

var _default = MovieReviewRoute;
exports.default = _default;
//# sourceMappingURL=movies.js.map