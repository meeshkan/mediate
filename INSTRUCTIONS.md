# React example with Heroku and CircleCI configuration

This project was created with [create-react-app](https://facebook.github.io/create-react-app/).

## Development

Start the development server:

```
npm start
```

Run tests in watch mode:

```
npm test
```

## Deployment in Heroku

First check that you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed and you're logged in.

Read the instructions [here](https://blog.heroku.com/deploying-react-with-zero-configuration#create-and-deploy-a-react-app-in-two-minutes) for deploying a React app in Heroku.

Create a Heroku app using the `create-react-app-buildpack` buildpack:

```
heroku create -b https://github.com/mars/create-react-app-buildpack.git
```

This command creates the Heroku app and sets a new Git remote `heroku`.

### Automatic deployment from CircleCI

1. Add the repository as a project in CircleCI
1. Read the instructions for Heroku deployment [here](https://circleci.com/docs/2.0/deployment-integrations/#heroku). You need to setup `HEROKU_APP_NAME` and `HEROKU_API_KEY` as environment variables in CircleCI. See [here](https://help.heroku.com/PBGP6IDE/how-should-i-generate-an-api-key-that-allows-me-to-use-the-heroku-platform-api) how to find your Heroku API key.
1. See [./circleci/config.yml](./.circleci/config.yml) for an example how to configure CircleCI to deploy `master` to Heroku.

### Manual deployment from command-line

```
git push heroku master
```
