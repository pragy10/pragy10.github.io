import React, {useState} from "react";


const JokeContent = () =>{
    const jokes = [
        "I went to buy some camo pants but couldn't find any.",
        " I failed math so many times at school, I can't even count.",
        "When life gives you melons, you might be dyslexic.",
        "Don't you hate it when someone answers their own questions? I do.",
        "The problem with kleptomaniacs is that they always take things literally."
    ]


    const [joke, setJoke] = useState("");


    const sayJoke = () =>{
        const idx = Math.floor(Math.random()*jokes.length);
        setJoke(jokes[idx]);
    }


    return (
        <div>
            <button onClick={sayJoke}>CLICK ME FOR A RANDOM JOKE!</button>
            {joke && <p>Here's a joke! <br/>{joke}</p> }
        </div>
    )
}


export default JokeContent;
