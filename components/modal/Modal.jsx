/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsx h */
import { h } from "preact"
import { useState, useEffect } from 'preact/hooks';

export default function Modal(props) {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    //console.log(props.isShow)
    if(typeof props.isShow == 'boolean'){
      setIsOpen(props.isShow)
    }
  },[props?.isShow])

  function onClose(){
    if(typeof props.onClose === 'function'){
      props.onClose();
    }
  }

  if(!isOpen){
    return (null)
  }

  return (<div>
    <div>
      <label>Modal</label><button onClick={onClose}> Close </button>
    </div>
    <div>
      {props.children}
    </div>
  </div>)
}
/*
<p> Content </p>
*/