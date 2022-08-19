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

function LoadObj(props){
 
  return (<div id={divID} ref={ref}>
    <label> EObject3D </label>
  </div>)
}
export default LoadObj;