# Project portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

We've already run this for you in the `Codespaces: server` terminal window below. If you need to stop the server for any reason you can just run `npm start` again to bring it back online.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) in the built-in Simple Browser (`Cmd/Ctrl + Shift + P > Simple Browser: Show`) to view your running application.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

Your app is ready to be deployed!

## Firebase setup

### Install npm modules (just in case)
npm install firebase

npm install -g firebase-tools

### Initialize
firebase init hosting

### Deploy
firebase deploy --only hosting:felix-xyz

(make sure that ```"site": "felix-xyz",``` is part of firebase.json. The *build* folder shall be deployed, not the *public* folder)
