import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const text = props.text;
  const reset = props.reset;
  return (
    <button onClick = { () => console.log(props.reset)}>
    <span>{text}</span>
    </button>
  )
};

const Application = () => {

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button text="reset" reset="reset"/>
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
