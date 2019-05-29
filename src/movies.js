import { Router } from 'express';
import * as movieReviewApi from './moviesApi';
import bodyParser from 'body-parser'

const getMovieReviewHandler = async (_, res, next) => {
  try {
    const movies = await movieReviewApi.getReivews();
    return res.send({ movies });
  } catch (err) {
    console.error('Failed fetching movies', err.stack);
    return next(err);
  }
};

const getOneMovie = async (req, res, next) => {
  try {
    const movie = await movieReviewApi.queryMovies(req.params.query)
    return res.send({ movie })
  } catch (err) {
    console.error("Failed fetching movies", err.stack);
    return next(err);
  }
}

function MovieReviewRoute() {
  const router = Router();
  router.use(bodyParser.json())

  router.get('/reviews', getMovieReviewHandler);
  router.get('/:query', getOneMovie)

  return router;
}

export default MovieReviewRoute;
