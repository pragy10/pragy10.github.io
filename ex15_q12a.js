import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
  };


  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>Simple Form with useState</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>


      {/* Dynamic display */}
      <div style={{ marginTop: '20px' }}>
        <h4>Live Preview:</h4>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormComponent />
  </React.StrictMode>
);


