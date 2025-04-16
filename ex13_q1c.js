import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const message = "Hello, React!";
const element = <h1>{message}</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
