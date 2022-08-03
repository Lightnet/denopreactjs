/*
  Project: Deno Preactjs
  Created By: Lightnet
*/
// https://deno.land/manual/jsx_dom/jsx
//for client

/** @jsxRuntime classic */
/** @jsx h */

import { h } from "preact"
import PageButton from "../components/PageButton.jsx";

//for server
export function handle(req){
  return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
}

function App() {
  return (<div>
    <PageButton/>  
    <label> App Page Test!</label>
  </div>)
}
//
export default App;