const express = require("express");
const axios = require("axios");
const onLoad = require("./helpers/onLoad");

const app = express();

let token = onLoad();

//Useless endpoint
app.get("/", (req, res) => res.send({ message: "The server is ready" }));

//End point for searching
app.get("/search", (req, res) => {
  if (req.query["song"]) {
    axios({
      method: "get",
      url: "https://api.spotify.com/v1/search",
      params: {
        q: req.query["song"],
        type: "track"
      },
      headers: {
        Authorization: "Bearer " + token
      },
      json: true
    }).then(response => res.send(response.data));
  }
});
// Important: port must be read from the environment for Heroku
const port = process.env.PORT || 3000;

console.log(`Listening at port ${port}`);

app.listen(port);
