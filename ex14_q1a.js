import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




const StyledMessage = () =>{
  return (<div><img  src={`${process.env.PUBLIC_URL}/Images/dog.jpg`} alt="doge"/></div>);
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StyledMessage/>);