import React from 'react';
import ReactDOM from 'react-dom/client';


const StyledButton = ({ onClick, children }) => {
  const buttonStyle = {
    backgroundColor: "green",
    borderRadius: 20,
    borderColor: "darkgreen",
    fontFamily: "Courier New",
    fontSize: 30,
    color: "white",
  };


  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
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
