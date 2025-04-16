import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';


const JokeFetcher = () => {
  const [joke, setJoke] = useState(null);


  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };


  useEffect(() => {
    fetchJoke();
  }, []);


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Random Joke Generator</h2>
      {joke ? (
        <div>
          <p><strong>Setup:</strong> {joke.setup}</p>
          <p><strong>Punchline:</strong> {joke.punchline}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={fetchJoke} style={{ marginTop: '10px' }}>
        Get Another Joke
      </button>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JokeFetcher />
  </React.StrictMode>
);



