/*
  Project: Deno Preactjs
  Created By: Lightnet
*/
// https://deno.land/manual/jsx_dom/jsx
//for client

/** @jsxRuntime classic */
/** @jsx h */

import { h } from "preact"
//import Button from "../components/Button.jsx";

//for server
export function handle(req){
  return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
}

function App() {
  return (<div>
    
    <label> App </label>
  </div>)
}
//<Button/>
export default App;