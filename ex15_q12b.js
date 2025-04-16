import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';


const FormComponent = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);


  const [submittedData, setSubmittedData] = useState({ name: '', email: '' });


  const handleSubmit = (e) => {
    e.preventDefault();


    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;


    setSubmittedData({
      name: nameValue,
      email: emailValue,
    });
  };


  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>Form using useRef</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input type="text" ref={nameRef} placeholder="Enter your name" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input type="email" ref={emailRef} placeholder="Enter your email" />
        </div>
        <button type="submit">Submit</button>
      </form>


      {/* Display after submit */}
      {submittedData.name && submittedData.email && (
        <div style={{ marginTop: '20px' }}>
          <h4>Submitted Data:</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormComponent />
  </React.StrictMode>
);


