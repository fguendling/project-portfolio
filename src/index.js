import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import AOS from 'aos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const firebaseConfig = {
  apiKey: "AIzaSyDA_GbrVE90Z-VXQ4Pp3h56n1XB8Sj61Sg",
  authDomain: "my-awesome-project22-12809.firebaseapp.com",
  projectId: "my-awesome-project22-12809",
  storageBucket: "my-awesome-project22-12809.appspot.com",
  messagingSenderId: "321277437337",
  appId: "1:321277437337:web:d0dfbd1dbdbc55b1179f08",
  measurementId: "G-FZ0SRPVT2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize AOS (Animate on scroll library)
AOS.init({
});
;
