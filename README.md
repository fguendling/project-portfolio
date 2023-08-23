# Project portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Relevant scripts/ commands

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) in the built-in Simple Browser (`Cmd/Ctrl + Shift + P > Simple Browser: Show`).

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm install firebase` 

Is required in case of a new codespace.

### `npm install -g firebase-tools`

Also necessary when a new codespace is used. 

### `firebase init hosting`

Initialize Firebase hosting. Creates firebase.json which already available in the repository and in good shape. Should not be modified. Hence the command shall not be used. 

### `firebase deploy --only hosting:felix-xyz`

Deploy to Firebase. Make sure that ```"site": "felix-xyz",``` is part of firebase.json. The *build* folder shall be deployed, not the *public* folder.
