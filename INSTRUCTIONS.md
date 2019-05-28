# Example Node.js app with Heroku and CircleCI instructions

## Usage

Starting the server:

```
npm start
```

Running tests:

```
npm test
```

## Setting up Heroku

### Creating a Heroku app

First ensure that you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.

Create a Heroku app from the root of this repository:

```
heroku create [optional-app-name]
```

See how a new remote `heroku` was added to the repository:

```
git remote -v
```

Type `heroku open` to open the app in browser. It should show the default page as we haven't deployed our application yet.

Type

```
heroku local
```

to serve the app locally.

### Setting up CircleCI

1. Add the repository as a project in CircleCI
1. Read the instructions for Heroku deployment [here](https://circleci.com/docs/2.0/deployment-integrations/#heroku).
1. Read and understand [./circleci/config.yml](./.circleci/config.yml) how CircleCI is configured to deploy `master` to Heroku.
1. After adding the project in CircleCI, uou need to setup `HEROKU_APP_NAME` and `HEROKU_API_KEY` as environment variables in CircleCI. See [here](https://help.heroku.com/PBGP6IDE/how-should-i-generate-an-api-key-that-allows-me-to-use-the-heroku-platform-api) how to find your Heroku API key. **WARNING: Never add the Heroku API key or any other sensitive data to GitHub!**

### Automatic deployments from GitHub

If for any reason you do not want to setup automatic deployments from CircleCI, you can also set them up from GitHub. Navigate to the app you created in Heroku dashboard and enable GitHub integration in "Deploy" tab. Connect your repository and enable automatic deploys from `master` branch. Then push to `master` to see your app being automatically deployed.

### Deployment from command-line

To deploy manually, you can simply push to `heroku` remote:

```
git push heroku master
```
