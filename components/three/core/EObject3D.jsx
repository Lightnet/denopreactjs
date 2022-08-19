/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://snyk.io/advisor/npm-package/preact/functions/preact.options._diff

/** @jsxRuntime classic */
/** @jsx h */

import { h, Fragment, createRef, options  } from "preact"
import {useState,useEffect} from "preact/hooks"
//import PageButton from "../components/PageButton.jsx";
import * as THREE from "https://unpkg.com/three@0.143.0/build/three.module.js";

function EObject3D(props) {

  const ref = createRef();
  const [entityObject, setEntityObject] = useState(null);
  const [isDiv, setIsDiv] = useState(true);
  const [parent, setParent]= useState(props.parent || null);
  const [divID, setDivID] = useState(crypto.randomUUID());

  //const [text, setText]= useState("Hello World");
  //const self = this;

  // Store previous hook
  //const oldHook = options.vnode;

  // Set our own options hook
  //options.vnode = vnode => {
    //console.log("Hey I'm a vnode", vnode);

    // Call previously defined hook if there was any
    //if (oldHook) {
      //oldHook(vnode);
    //}
  //}

  useEffect(()=>{
    //console.log(self);
    //console.log(ref.current.parentNode)
    //console.log(props)
    //if(ref.current.parentNode instanceof HTMLCanvasElement){
      //console.log("FOUND HTMLCanvasElement!")
    //}else{
      //console.log("NOT FOUND")
    //}
    Init()
  },[])

  //useEffect(()=>{
    //console.log(ref)
  //},[ref])

  function Init(){
    //console.log(ref)
    //console.log("OBJECT3D INIT...")
  }

  function onclick(){
    console.log(ref)
  }

  return (<div id={divID} ref={ref}>
    <label> EObject3D </label>
    {props.children}
  </div>)
}
//<label onClick={onclick}> Hello </label>

export default EObject3D;