import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';


const Message =()=>{
  const [state, setState] = useState(0);


  const increase = () =>{
    setState(state+1);
  }


  const decrease = () =>{
    setState(state-1);
  }


  return(
    <div>
      <h1>COUNT: {state} </h1>
      <button onClick={increase}> INCREASE</button>&nbsp;&nbsp;
      <button onClick={decrease}> DECREASE</button>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Message />
  </React.StrictMode>
);
