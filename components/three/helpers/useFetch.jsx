
/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */
// https://www.w3schools.com/react/react_useeffect.asp
// https://stackoverflow.com/questions/55360736/how-do-i-window-removeeventlistener-using-react-useeffect
// https://usehooks.com/useEventListener/
// https://css-tricks.com/using-requestanimationframe-with-react-hooks/
// 
// 


import { h, createContext } from "preact"
import { 
  useEffect, 
  //useState, 
  //useMemo 
} from "preact/hooks"
//import { isObjEmpty } from "../../../libs/helper.js"

function useFetch(callback){
  const ref = createRef();

  if(typeof callback !== 'function'){
    console.log("Error callback Animation Frame null!")
    return;
  }

  useEffect(()=>{
    console.log("INIT FRAME")
    return ()=>{
      console.log("CLEAN UP FRAME")
    }
  },[])
}

export default useFetch;
