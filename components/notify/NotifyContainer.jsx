/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/
// https://codepen.io/kick-your-ass/pen/pqmjQG

/** @jsx h */
import { h } from "preact"
import { useState, useEffect } from 'preact/hooks';

export default function NotifyContainer(props) {

  const [timeOut, setTimeOut] = useState(5);
  const [slide, setSlide] = useState("side_ROut")

  useEffect(()=>{
    console.log(props)
    setSlide("slide_RIn")
    const myTimeout0 = setTimeout(()=>{closeAnimation()}, 3000);

    const myTimeout = setTimeout(()=>{onclose()}, 5000);

    return ()=>{
      clearTimeout(myTimeout0);
      clearTimeout(myTimeout);
    }
  },[])

  function closeAnimation(){
    setSlide("side_ROut");
  }

  function onclose(){
    if(typeof props.onClose == 'function'){
      props.onClose();
    }
  }

  return (<div class={props.color + " " + slide}>
    <label>Name:{props.message}</label>
    <button onClick={()=>onclose()}> x </button>
  </div>)
}