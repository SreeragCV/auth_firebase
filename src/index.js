import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseContext } from './store/CreateContext';
import { app } from './config/firebase';  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{app}} >
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);

