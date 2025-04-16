import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




const SomeFunction = ({num}) =>{
  const isPrime = (num) =>{
    if(num<=1) return false;
    for(let i=2;i<num;i++){
      if(num%i===0) return false;
    }
    return true;
  };
  return <p>{num} is {isPrime(num)? "a prime number" : "not a prime number"} </p>


};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SomeFunction num={1789}/>);


