/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://deno.land/manual/jsx_dom/jsx
//for client

/** @jsxRuntime classic */
/** @jsx h */

import { h } from "preact"
//import PageButton from "../components/PageButton.jsx";
import LeftSideBar from "../components/sidebars/LeftSideBar.jsx"

//for server
//export function handle(req){
  //return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
//}

function SideBars() {

  return (<div class={""} style="position:fixed;width:100%;height:100%;">
    <LeftSideBar>

    </LeftSideBar>
  </div>)
}
// <PageButton/>  
export default SideBars;