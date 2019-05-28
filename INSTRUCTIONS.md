# Python boilerplate for Mediate

This is a Python boilerplate for deploying a Flask backend in Heroku.

## Heroku instructions

Login to Heroku CLI:

```
heroku login
```

Create a Heroku application:

```
heroku create [your-app-name]
```

Test that the app runs locally:

```
heroku local
```

Test manual deployment by pushing the repository to the remote `heroku`:

```
git push heroku master
```

## Setting up CircleCI

The configuration for building and deploying the app is in [.circleci/config.yml](./.circleci/config.yml). The configuration references environment variables `HEROKU_APP_NAME` and `HEROKU_API_KEY`, which you must add in _CircleCI dashboard_ . **Never push the API key to GitHub!**
