import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAH_pd7u7qd6DP-E6tHuyhUAz0RLDeMuMI",
  authDomain: "boxing-shop-39693.firebaseapp.com",
  projectId: "boxing-shop-39693",
  storageBucket: "boxing-shop-39693.appspot.com",
  messagingSenderId: "301784544422",
  appId: "1:301784544422:web:0bd80a8d193cf17b2cb067"
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)