import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyAiWxsXyUql6eUOZZZrBT9Mh9Kjn-HdePQ",
  authDomain: "ecommerce-87462.firebaseapp.com",
  projectId: "ecommerce-87462",
  storageBucket: "ecommerce-87462.appspot.com",
  messagingSenderId: "614027496001",
  appId: "1:614027496001:web:4ea2703e3f8e32cd3cd4c0"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
