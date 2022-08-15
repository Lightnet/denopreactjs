/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://deno.land/manual/jsx_dom/jsx
//for client

/** @jsxRuntime classic */
/** @jsx h */

import { h, Fragment, createRef } from "preact"
import {useState,useEffect} from "preact/hooks"
//import PageButton from "../components/PageButton.jsx";
import * as THREE from "https://unpkg.com/three@0.143.0/build/three.module.js";


function EObject3D(props) {

  const ref = createRef();
  const [entityObject, setEntityObject] = useState(null);
  const [isDiv, setIsDiv] = useState(true);

  useEffect(()=>{
    Init()
  },[])

  useEffect(()=>{
    console.log(ref)
  },[ref])

  function Init(){
    console.log(ref)
    console.log("OBJECT3D INIT...")
  }

  function onclick(){
    console.log(ref)
  }

  return (<div ref={ref}>
    <label onClick={onclick}> Hello </label>
    {props.children}
  </div>)
}

export default EObject3D;