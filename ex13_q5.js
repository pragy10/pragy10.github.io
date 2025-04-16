import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const SomeFunction = ({isMorning}) =>{ 	
 return <h1>{isMorning? 'Good Morning' : 'Good Evening'}</h1>
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SomeFunction isMorning={true}/>);


