import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




const SomeFunction = ({year}) =>{
  const isLeapYear = (year%4===0 && year%100!==0) || year%400 === 0;
  return <p>{year} is {isLeapYear ? 'a leap year' : 'not a leap year'}</p>;
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SomeFunction year={2024}/>);
