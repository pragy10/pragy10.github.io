import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import dogeImage from './Images/doge.jpg';




const StyledMessage = () =>{
  return (<div><img  src={dogeImage} alt="doge"/></div>);
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StyledMessage/>);
