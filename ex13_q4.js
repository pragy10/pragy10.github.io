import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const SomeFunction = ({num1,num2}) =>{
  const sum = Math.pow(num1,2) + Math.pow(num2,2);
  return <p>The sum of squares of two numbers {num1} and {num2} is {sum}</p>
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SomeFunction num1={3} num2={4}/>);