/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
//import { useState } from 'preact/hooks';
import { useState } from "preact/compat";

export default function BulletinBoardSlide() {
  // State for the counter
  const [count, setCount] = useState(0);
  function add(){
    console.log("add")
    setCount(state=>state+1)
  }

  return (<div>
    <label>BulletinBoardSlide: {count}</label>
  </div>)
}