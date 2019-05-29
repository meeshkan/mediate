require('dotenv/config'); // Read .env
import { unmock } from 'unmock-node';
import buildApp from './app';

// Important: port must be read from the environment for Heroku
const port = process.env.PORT || 3000;

console.log(`Listening at port ${port}`);

(async () => {
  // Use unmock for development, disabled when NODE_ENV=production
  await unmock();
  const app = buildApp();
  app.listen(port);
})();
