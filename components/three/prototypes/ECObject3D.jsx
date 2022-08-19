/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://snyk.io/advisor/npm-package/preact/functions/preact.options._diff
// https://preactjs.com/guide/v8/api-reference/#lifecycle-methods
/** @jsxRuntime classic */
/** @jsx h */

import { h, Fragment, createRef, options, Component  } from "preact"
import {useState,useEffect} from "preact/hooks"
import { PureComponent } from 'preact/compat';
//import PageButton from "../components/PageButton.jsx";
import * as THREE from "https://unpkg.com/three@0.143.0/build/three.module.js";


class ECObject3D extends Component {

  state = { age: 1 };

  init(){
    console.log("INIT")
  }

  componentDidMount(){
    //console.log("MOUNT")
    //console.log(this)
    this.init()
  }

  render(props, state) {
    //console.log("render")
    return <div />
  }
}

export default ECObject3D;