/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
import { useState, useEffect } from 'preact/hooks';
//import { } from "preact/compat";

function LeftSideBar(props) {

  const [width, setWidth] = useState(200);
  const [slide, setSlide] = useState("leftSideBar_In");
  const [isShow, setIsShow] = useState(true);

  useEffect(()=>{
    if(typeof props.isshow == 'boolean'){
      setIsShow(props.isshow);
    }
  },[props.isshow])


  function clickToggle(){
    console.log("Toggle")
    if(slide == "leftSideBar_In"){
      setSlide("leftSideBar_Out")
      setIsShow(false);
    }else{
      setSlide("leftSideBar_In")
      setIsShow(true);
    }
  }
  
  return (<div class={slide} style={`position:fixed;left:0px;top:0px;width:${width};height:100vh;background:blue;`}>
    <div style={`width:100%;`}>
      <label onClick={clickToggle}> Toggle</label>
    </div>
    <div style={`width:100%;`}>
      {props.children}
    </div>
  </div>)
}

export default LeftSideBar;