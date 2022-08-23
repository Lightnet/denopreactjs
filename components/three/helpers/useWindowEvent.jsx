
/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */

// https://stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks
// https://www.codedaily.io/tutorials/Creating-a-Reusable-Window-Event-Listener-Hook-with-useEffect-and-useCallback


import { h, createContext } from "preact"
import { 
  useEffect, 
  //useState, 
  //useMemo 
} from "preact/hooks"
//import { isObjEmpty } from "../../../libs/helper.js"

function useWindowEvent(event, callback){
  const ref = createRef();

  if(typeof window === 'undefined'){
    console.log("Error window null!")
    return;
  }

  if(typeof callback !== 'function'){
    console.log("Error callback null!")
    return;
  }

  useEffect(()=>{
    console.log("INIT callback")
    window.addEventListener(event, callback);
    return ()=>{
      console.log("CLEAN UP callback")
      window.removeEventListener(event, callback);
    }
  },[event, callback])
}

export default useWindowEvent;
