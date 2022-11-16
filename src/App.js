
import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import App1 from "./App1.js";

let classes={red:"bordRed" , green:"bordGreen"  }
let objInit={text:' было ' , val:100 , myClass:'bordRed' }

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <App1  {...objInit}> Children </App1>
      <button>Increment+</button><br/><br/>
      <button>Decrement*</button>

    </div>
  );
}
