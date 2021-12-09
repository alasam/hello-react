import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const text = props.text;
  const reset = props.reset;
  return (
    <button onClick = { () => console.log({reset})}>
    <span>{text}</span>
    </button>
  )
};

const Application = () => {
  const [name, setName] = useState("");
  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <input 
      value={name} 
      onChange={(event) => setName(event.target.value)} 
      placeholder="Type your name"></input>
      <Button text="reset" reset="reset"/>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
