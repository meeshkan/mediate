const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  axios
    .get(
      'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=avenger&api-key=KcivkecbgfUqo4J7DgHNdMtw5XgZO0Ey',
    )
    .then(function(response) {
      // handle success

      // returning json obj to the client
      res.json(response.data.results);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
});

// Important: port must be read from the environment for Heroku
const port = process.env.PORT || 3000;

console.log(`Listening at port ${port}`);

app.listen(port);
