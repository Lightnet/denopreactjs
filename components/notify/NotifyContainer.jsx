/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsx h */
import { h } from "preact"
import { useState, useEffect } from 'preact/hooks';

export default function NotifyContainer(props) {

  const [timeOut, setTimeOut] = useState(5);

  useEffect(()=>{
    console.log(props)

    const myTimeout = setTimeout(()=>{onclose()}, 5000);

    return ()=>{
      clearTimeout(myTimeout);
    }
  },[])

  function onclose(){
    if(typeof props.onClose == 'function'){
      props.onClose();
    }
  }

  return (<div class={props.color}>
    <label>Name:{props.message}</label>
    <button onClick={()=>onclose()}> x </button>
  </div>)
}