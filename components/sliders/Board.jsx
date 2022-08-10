/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
//import { useState } from 'preact/hooks';
import { useState, useEffect } from "preact/compat";

export default function Board(props) {

  const [bSlide, setBSlide] = useState("sideBoard_ROut");

  useEffect(()=>{
    if(typeof props.slide !== 'undefined'){
      setBSlide(props.slide)
    }

  },[props.slide])



  return (<div class={bSlide} style="width:600px;height:200px;background:blue;">

  </div>)
}