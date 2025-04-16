import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




const SomeFunction = ({text}) =>{
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text === reversed;


  return(
    <>
      <p>Original string: {text}</p>
      <p>Reversed string: {reversed}</p>
      <p>This is {isPalindrome? "a palindrome": "not a palindrome"}</p>
    </>
  )


};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SomeFunction text={"racecar"}/>);





