const axios = require("axios");
require("dotenv").config(); //this one for saving the env variables

//Please create an application on Spotify Developer's dashboard to get the client id and secret id
//then either create a .env file in the root of this application when run locally or add those to
//the config vars on heroku
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const onLoad = () => {
  //This function runs on server load, fetching the token through "client credentials" authorization flow from spotify
  let token = "";
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
  return token;
};
module.exports = onLoad;
