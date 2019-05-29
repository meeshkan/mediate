import { Router } from 'express';
import * as movieReviewApi from './moviesApi';

const getMovieReviewHandler = async (_, res, next) => {
  try {
    const movies = await movieReviewApi.getReivews();
    return res.send({ movies });
  } catch (err) {
    console.error('Failed fetching movies', err.stack);
    return next(err);
  }
};

function MovieReviewRoute() {
  const router = Router();

  router.get('/reviews', getMovieReviewHandler);

  return router;
}

export default MovieReviewRoute;
