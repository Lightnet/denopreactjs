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
// 

import { 
  h
//, createContext 
, createRef
} from "preact"
import { 
  useEffect, 
  //useState, 
  //useMemo 
} from "preact/hooks"
//import { isObjEmpty } from "../../../libs/helper.js"

function useAnimationFrame(callback){
  const requestRef = createRef();

  if(typeof callback !== 'function'){
    console.log("Error callback Animation Frame null!")
    return;
  }

  const animate = time => {
    // The 'state' will always be the initial value here
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(()=>{
    console.log("INIT FRAME")
    requestRef.current = requestAnimationFrame(animate);
    return ()=>{
      console.log("CLEAN UP FRAME")
      cancelAnimationFrame(requestRef.current)
    }
  },[callback])
}

export default useAnimationFrame;
