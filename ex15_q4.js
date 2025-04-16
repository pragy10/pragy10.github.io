import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';


const StyledButton = ({ onClick, children }) => {
  return (
    <button className="styleButton" onClick={onClick}>
      {children}
    </button>
  );
};


const handleClick = () => {
  alert("BUTTON CLICKED!!!!");
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledButton onClick={handleClick}>CLICK ME!</StyledButton>
  </React.StrictMode>
);
