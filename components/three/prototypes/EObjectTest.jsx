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

function EObjectTest(props) {

  const ref = createRef();
  const [entityObject, setEntityObject] = useState(null);
  const [isDiv, setIsDiv] = useState(true);
  const [parent, setParent]= useState(props.parent || null);
  //const self = this;
  useEffect(()=>{
    //console.log(self);
    //console.log(props)
    //console.log(ref)
    //console.log(ref.current.parentNode)
    Init()
  },[])


  function Init(){
    //console.log(ref)

    //console.log("EObjectTest INIT...")
    //console.log(this)
    //console.log(self)
  }

  return (<div ref={ref}>
    <label> EObjectTest </label>
    {props.children}
  </div>)
}

export default EObjectTest;