import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const FruitList = () =>{
  const fruits = ['apple','orange','banana','cherry'];
  return(
    <ul>
      {fruits.map((fruit,index)=><li key={index}>{fruit}</li>)}
    </ul>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FruitList/>);