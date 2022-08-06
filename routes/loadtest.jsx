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
import LoadModule from "../components/load/LoadModule.jsx";

//for server
//export function handle(req){
  //return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
//}

function App() {
  return (<div>
    <LoadModule/>
  </div>)
}
//
export default App;