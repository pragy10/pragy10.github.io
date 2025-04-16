import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




const SomeFunction = () =>{
  const [number,setNumber] = React.useState(null);
  const generateNumber = () => setNumber(Math.floor(Math.random()*100)+1);
  return (
    <>
      <button onClick={generateNumber}>Click to generate number!</button>
      {number && <p>Random Number: {number}</p>}
    </>
  );


};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SomeFunction />);




