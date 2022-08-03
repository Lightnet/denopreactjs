/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://deno.land/manual/jsx_dom/jsx
//for client

/** @jsxRuntime classic */
/** @jsx h */

import { h } from "preact"
//import PageButton from "../components/PageButton.jsx";

//for server
export function handle(req){
  // this stop App from render to doc html
  return new Response("Hello, World! Handle!",{status:200,headers:{'Content-Type':'text/html'}});
}

function App() {
  return (<div>
    <label> App Page Request!</label>
  </div>)
}
// <PageButton/>  
export default App;