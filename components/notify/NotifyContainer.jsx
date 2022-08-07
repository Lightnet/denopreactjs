/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/
// https://codepen.io/kick-your-ass/pen/pqmjQG
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
import { useState, useEffect } from 'preact/hooks';

export default function NotifyContainer(props) {

  const [timeOut, setTimeOut] = useState(5);
  const [slide, setSlide] = useState("side_ROut")

  useEffect(()=>{
    //console.log(props)
    setSlide("slide_RIn")
    
    let autoClose =true;
    let myTimeout0;
    let myTimeout;
    if(typeof props.autoClose == 'boolean'){
      autoClose= props.autoClose;
    }

    if(autoClose){
      myTimeout0 = setTimeout(()=>{closeAnimation()}, 3000);
      myTimeout = setTimeout(()=>{onclose()}, 5000);
    }

    return ()=>{
      if(autoClose){
        clearTimeout(myTimeout0);
        clearTimeout(myTimeout);
      }
    }
  },[])

  function closeAnimation(){
    setSlide("side_ROut");
    //setTimeout(()=>{onclose()}, 2000);
  }

  function onclose(){
    if(typeof props.onClose == 'function'){
      setSlide("side_ROut");
      //props.onClose();
      if(props.autoClose==false){
        setTimeout(()=>{props.onClose()}, 2000);
      }else{
        props.onClose();
      }
    }
  }

  return (<div class={props.color + " " + slide}>
    <label>{props.message}</label>
    <button onClick={()=>onclose()}> x </button>
  </div>)
}