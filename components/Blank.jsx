/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
import { useState } from 'preact/hooks';
//import { } from "preact/compat";

export default function Blank() {
  // State for the counter
  //const [count, setCount] = useState(0);
  function bar(){
  }

  return (<div>
    <button onClick={bar}> blank </button>
  </div>)
}