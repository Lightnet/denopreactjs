/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/*

Left Slide in and out
Right Slide in and out


*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
//import { useState } from 'preact/hooks';
import { useState } from "preact/compat";

export default function BulletinBoardSlide() {
  // State for the counter
  const [count, setCount] = useState(0);
  const [bSlide, setBSlide] = useState("sideBoard_ROut");
  function toggle(){
    console.log("add")
    setCount(state=>state+1)
    if(bSlide=="sideBoard_ROut"){
      setBSlide("slideBoard_RIn")
    }else{
      setBSlide("sideBoard_ROut")
    }
  }

  return (<div>
    <div style="width:600px;height:200px;background:gray;overflow: clip;">
      <div class={bSlide} style="width:600px;height:200px;background:blue;">

      </div>
    </div>
    <label onClick={toggle}>BulletinBoardSlide</label>
  </div>)
}