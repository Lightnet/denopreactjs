/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsx h */
import { h } from "preact"
import { useState, useContext } from 'preact/hooks';

import { NotifyContext } from "./NotifyProvider.jsx"

export default function NotifyTest(props) {

  const { 
    //notifies,
    //setNotifies,
    setNotify
  } = useContext(NotifyContext);

  function NotifyInfo(){
    console.log("TESTing...")
    setNotify({
      typ:"info",
      message:"test"
    })
  }

  return (<div>
    <button onClick={NotifyInfo}> Notify Test </button>
  </div>)
}