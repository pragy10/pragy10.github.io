import React from 'react';
import ReactDOM from 'react-dom/client';


const StyledButton = ({ onClick, children }) => {
  return (
    <div>
      <style>
        {
          `.styleButton {
            background-color: red;
            border-radius: 20px;
            border-color: darkred;
            font-family: "Courier New";
            font-size: 30px;
            color: white;
          }`
        }
      </style>


      <button className="styleButton" onClick={onClick}>
      {children}
    </button>
    </div>
  );
};


const handleClick = ()=>{
  return(
    alert("BUTTON CLICKED!!!!")
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledButton children={"CLICK ME!"} onClick={handleClick}/>
  </React.StrictMode>
);
