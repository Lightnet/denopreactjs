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
import { useState, useEffect } from "preact/compat";
import CardBoard from "./Board.jsx";

export default function BulletinBoardSlide() {
  // State for the counter
  const [count, setCount] = useState(0);
  const [bSlide, setBSlide] = useState("sideBoard_ROut");

  const [boards, setBoards] = useState(new Map());
  const [boardId, setBoardId] = useState("");

  useEffect(()=>{
    boards.set("000",{
      mode:"sideBoard_ROut",
      context:"Hello"
    })
  },[])


  function toggle(){
    console.log("add")
    setCount(state=>state+1)
    if(bSlide=="sideBoard_ROut"){
      setBSlide("slideBoard_RIn")
    }else{
      setBSlide("sideBoard_ROut")
    }
  }

  function moveLeft(){
    setBSlide("slideBoard_LOut")
  }

  function moveRight(){
    setBSlide("sideBoard_ROut")
  }

  return (<div>
    <div style="width:600px;height:200px;background:gray;overflow: clip;">
      <CardBoard slide={bSlide}></CardBoard>
    </div>
    <label onClick={toggle}>BulletinBoardSlide</label>
    <button onClick={moveLeft}>Left</button>
    <button onClick={toggle}>Toggle</button>
    <button onClick={moveRight}>Right</button>
  </div>)
}
/*
<div class={bSlide} style="width:600px;height:200px;background:blue;"></div>
*/