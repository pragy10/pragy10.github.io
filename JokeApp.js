import './App.css';
import JokeHeader from './JokeHeader.js';
import JokeContent from './JokeContent.js';
import JokeFooter from './JokeFooter.js';


function JokeApp() {
  return (
    <div>
      <JokeHeader title={"JOKE GENERATOR"}/>
      <JokeContent />
      <JokeFooter />
    </div>


  )
}


export default JokeApp;
