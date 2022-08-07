/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
import { useState } from 'preact/hooks';
//import { useState } from "preact/compat";

export default function ButtonTimer() {
  // State for the counter
  const [count, setCount] = useState(0);
  const [tId, setTId] = useState(null);

  function btnStart(){
    console.log("start")
    if(tId !=null){
      clearInterval(tId);
    }
    const id = setInterval(()=>{
      timeTick();
    },1000)
    setTId(id)
  }

  function btnStop(){
    console.log("stop")
    if(tId !=null){
      clearInterval(tId);
    }
  }

  function timeTick(){
    setCount(state=>state+1)
  }

  return (<div>
    <button onClick={btnStart}> Start </button>
    <button onClick={btnStop}> Stop </button>
    <label>Count: {count}</label>
  </div>)
}