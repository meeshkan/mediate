const express = require('express');

const app = express();

app.get('/', (req, res) => res.send({ message: 'Hello from my app!' }));

// Important: port must be read from the environment for Heroku
const port = process.env.PORT || 3000;

console.log(`Listening at port ${port}`);

app.listen(port);
