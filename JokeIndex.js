import React from 'react';
import ReactDOM from 'react-dom/client';
import JokeApp from './JokeApp.js'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JokeApp />
  </React.StrictMode>
);
