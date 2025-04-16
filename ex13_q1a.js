import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


console.log("runnig...");
const element = React.createElement('h1',null,'Hello, React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);