/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
import { useState } from 'preact/hooks';

export default function PageButton() {
  // State for the counter
  const [count, setCount] = useState(0);
  function add(){
    console.log("add")
    setCount(state=>state+1)
  }

  function subtract(){
    console.log("subtract")
    setCount(state=>state-1)
  }

  return (<div>
    <button onClick={add}> + </button>
    <button onClick={subtract}> - </button>
    <label>[Count: {count}]</label>
  </div>)
}