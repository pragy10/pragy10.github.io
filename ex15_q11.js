import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';


const Child = ({ message }) => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', border: '1px solid gray' }}>
      <h3>Message from Parent:</h3>
      <p>{message}</p>
    </div>
  );
};


Child.propTypes = {
  message: PropTypes.string.isRequired,
};


const Parent = () => {
  const parentMessage = "Hello from the Parent component! using prop types";


  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2>Parent Component</h2>
      <Child message={parentMessage} />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);


