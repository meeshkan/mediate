const express = require("express");
const axios = require("axios");
require("dotenv").config(); //this one for saving the env variables

const app = express();

//Please create an application on Spotify Developer's dashboard to get the client id and secret id
//then either create a .env file in the root of this application when run locally or add those to
//the config vars on heroku
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

let token = "";

const onLoad = () =>
  //This function runs on server load, fetching the token through "client credentials" authorization flow from spotify
  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    params: {
      grant_type: "client_credentials"
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64")
    },
    json: true
  })
    .then(response => {
      token = response.data.access_token;
    })
    .catch(err => console.log(err));

onLoad();

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
