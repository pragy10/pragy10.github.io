import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const StyledMessage = () =>{
  return <p style={{color: 'blue',fontSize:'20px'}}>This is some styled message using react</p>
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StyledMessage/>);