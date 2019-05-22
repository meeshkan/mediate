# React example with Heroku and CircleCI configuration

This project was created with [create-react-app](https://facebook.github.io/create-react-app/).

## Deployment in Heroku

First check that you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed and you're logged in.

Read the instructions [here](https://blog.heroku.com/deploying-react-with-zero-configuration#create-and-deploy-a-react-app-in-two-minutes) for deploying a React app in Heroku.

Create a Heroku app using the `create-react-app-buildpack` buildpack:

```
heroku create -b https://github.com/mars/create-react-app-buildpack.git
```

This command creates the Heroku app and sets a new Git remote `heroku`.

### Manual deployment to Heroku

```
git push heroku master
```
