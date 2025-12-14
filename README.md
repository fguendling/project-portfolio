# Project portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Relevant scripts/ commands

### `npm start`

Runs the app in the development mode. Opens at [http://localhost:3000](http://localhost:3000).

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm install -g firebase-tools`

Required for Firebase CLI commands (deploy, etc.). Only needs to be run once in new environments.

### `firebase deploy --only hosting:felix-xyz`

Deploy to Firebase. Make sure that `"site": "felix-xyz",` is part of firebase.json. The _build_ folder shall be deployed, not the _public_ folder.
