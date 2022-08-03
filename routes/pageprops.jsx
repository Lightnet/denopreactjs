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
  const data ={
    text:"textstring",
    foo:"barrr"
  }
  return data;
}

function App(props) {
  console.log(props)
  return (<div>
    
    <label> App Page Request!</label>
    <label> foo:{props.foo}!</label>
  </div>)
}
// <PageButton/>  
export default App;