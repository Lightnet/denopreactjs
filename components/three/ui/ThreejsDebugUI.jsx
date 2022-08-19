/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */

import { h, createContext } from "preact"
import { 
  useEffect, 
  useState, 
  useMemo,
  useContext
} from "preact/hooks"
import { isObjEmpty } from "../../../libs/helper.js"
import { ThreejsContext } from "../core/ThreejsProvider.jsx";

function ThreejsDebugUI(){
  const {reRenders} = useContext(ThreejsContext);

  function getRenders(){
    console.log(reRenders)
    reRenders.forEach(value => {
      console.log(value)
      console.log(value.render.domElement.getAttribute('id'))
    });
  }

  return (<div style="position:fixed;top:0px;left:0px">
    <button onClick={getRenders}> renders </button>
  </div>)
}

export default ThreejsDebugUI;