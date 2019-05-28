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

### Setting up CircleCI

1. Add the repository as a project in CircleCI
1. Read the instructions for Heroku deployment [here](https://circleci.com/docs/2.0/deployment-integrations/#heroku).
1. Read and understand [./circleci/config.yml](./.circleci/config.yml) and how CircleCI is configured to deploy `master` to Heroku.
1. After adding the project in CircleCI, uou need to setup `HEROKU_APP_NAME` and `HEROKU_API_KEY` as environment variables in CircleCI. See [here](https://help.heroku.com/PBGP6IDE/how-should-i-generate-an-api-key-that-allows-me-to-use-the-heroku-platform-api) how to find your Heroku API key. **WARNING: Never add the Heroku API key or any other sensitive data to GitHub!**

### Automatic deployments from GitHub

If for any reason you do not want to setup automatic deployments from CircleCI, you can also set them up from GitHub. Navigate to the app you created in Heroku dashboard and enable GitHub integration in "Deploy" tab. Connect your repository and enable automatic deploys from `master` branch. Then push to `master` to see your app being automatically deployed.

### Deployment from command-line

To deploy manually, you can simply push to `heroku` remote:

```
git push heroku master
```
