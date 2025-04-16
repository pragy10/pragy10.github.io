import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const SomeFunction = () =>{
  const Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today = new Date().getDay();
  return <p>Today is: {Days[today]}</p>
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SomeFunction />);
