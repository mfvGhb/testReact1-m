
import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import App1 , {App2 , App3} from "./App1.js";

let app1={text:' было ' , val:100 , myClass:'bordRed' } ;
let app2={className:"bordGreen" , style:{width:'30%' , "border-radius":'54px'} } ;
let attr3={ className:"bordBlue" ,  style:{width:'80%' , "border-radius":'44px' , color:'blue'}              } ;

export default function App() {

  let f33=()=>alert("f33") ;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <App1  {...app1}> Children </App1>
     
      {App2(app2)}

      <App3 {...attr3}>App3 {attr3.className}</App3>
      <br/>
      <button>Increment+</button><br/><br/>
      <button>Decrement*</button>
    </div>
  );
}
