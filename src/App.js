import React, { Component } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0); //estado para el tamaño del texto
  const [text, setText] = useState(""); //estado para el texto

  const handlerChange = (event) => {
    setText(event.target.value);
    setValue(event.target.value.length);
  };

  return (
    <div className="container">
      <textarea onChange={handlerChange} rows="3">
        {text}
      </textarea>
      <div className="counter">{value}</div>
    </div>
  );
}

export default App;
