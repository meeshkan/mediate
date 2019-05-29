import express from 'express';
import { unmock } from 'unmock-node';
import MovieReviewRoute from '../src/movies';
import request from 'supertest';

const app = express();
const route = MovieReviewRoute();
app.use('/movies/reviews', route);

describe('Movies route', () => {
  beforeAll(async () => {
    await unmock();
  });
  it('returns movie reviews', async () => {
    const response = await request(app)
      .get('/movies/reviews')
      .expect(200);
    expect(response.body.movies).toBeDefined();
  });
});
