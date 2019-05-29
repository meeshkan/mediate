# Mediate

Mediate is the world's most awesome media aggregator! You have been tasked to build it for a cohort of demanding clients that want to find the best movies and music to promote their brands. To build and test the app, we'll use [`unmock`](https://githutb.com/unmock/unmock-js).

This is the Nodejs backend for this Mediate application.

# How to run the server

### Locally

- `git clone` this repository.
- Use the terminal to access this repository on your computer, then run `npm install` to install the needed modules.
- Go and create a spotify application at [Spotify for Developers ](https://developer.spotify.com/).
- Create a `.env` file in the root of the repository.
- Grab the client ID and client secret from your newly-created spotify application and write them in the `.env` file in this format:

```javascript
SPOTIFY_CLIENT_ID=*your_client_id_here*
SPOTIFY_CLIENT_SECRET=*your_client_secret_here*
```

- `npm start` to run the server after installing the modules.
- `npm test` to run the tests.

### on Heroku

- remember to config the config vars with the format similar to above.

# Endpoints

`GET /search?song={songName}`: Search for songs with song name.
