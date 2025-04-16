import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';


const FocusInput = () => {
  const inputRef = useRef(null);


  const handleFocus = () => {
    inputRef.current.focus();
  };


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Focus Input Using useRef</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus me"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={handleFocus} style={{ padding: '8px 12px' }}>
        Focus Input
      </button>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FocusInput />
  </React.StrictMode>
);
