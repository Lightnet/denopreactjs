/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://snyk.io/advisor/npm-package/preact/functions/preact.options._diff
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame


/** @jsxRuntime classic */
/** @jsx h */

import { h, Fragment, createRef, options  } from "preact"
import {useState, useEffect, useContext} from "preact/hooks"
//import PageButton from "../components/PageButton.jsx";
import * as THREE from "https://unpkg.com/three@0.143.0/build/three.module.js";
import { ThreejsContext } from "../core/ThreejsProvider.jsx";

function CubeTest(props){

  const ref = createRef();
  const {addObj3D, sceneID, isInit} = useContext(ThreejsContext)

  const [enable, setEnable] = useState(props.enable || true);
  const [divID, setDivID] = useState(crypto.randomUUID());

  const [obj3D, setObj3D] = useState(null);
  const [isFrame, setIsFrame] = useState(false);

  useEffect(()=>{
    if(isInit){//check if three rerender is setup
      //console.log("TEST sceneID:",sceneID)
      init()
    }
  },[isInit])

  useEffect(()=>{
    if(obj3D!=null && isFrame == false){
      setIsFrame(true)
      updateFrame();
    }
  },[obj3D])

  function updateFrame(){
    //console.log(obj3D)
    if(obj3D){
      obj3D.rotation.x += 0.01;
      obj3D.rotation.y += 0.01;
    }
    requestAnimationFrame( updateFrame );
  }

  function init(){
    //console.log("sceneID:", sceneID)
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const _cube = new THREE.Mesh( geometry, material );

    //setIsFrame(true);
    setObj3D(_cube)
    addObj3D(_cube)
    //addObj3D();
    //updateFrame();
  }
 
  return (<div id={divID} ref={ref}>
    <label> CubeTest </label>
  </div>)
}
export default CubeTest;