import { unmock } from 'unmock-node';
import request from 'supertest';
import buildApp from '../src/app';

const app = buildApp();

describe('Express app', () => {
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
