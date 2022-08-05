/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsx h */
import { h } from "preact"
import { useState, useContext } from 'preact/hooks';

import { NotifyContext, NotifyColor } from "./NotifyProvider.jsx"

export default function NotifyTest(props) {

  const { 
    //notifies,
    //setNotifies,
    setNotify
  } = useContext(NotifyContext);

  function NotifyInfo(){
    //console.log("TESTing...")
    setNotify({
      typ:NotifyColor.info,
      message:"test"
    })
  }

  function NotifySuccess(){
    //console.log("TESTing...")
    setNotify({
      typ:NotifyColor.success,
      message:"test"
    })
  }

  function NotifyError(){
    //console.log("TESTing...")
    setNotify({
      typ:NotifyColor.error,
      message:"test"
    })
  }

  function NotifyWarn(){
    //console.log("TESTing...")
    setNotify({
      typ:NotifyColor.warn,
      message:"test"
    })
  }

  return (<div>
    <button onClick={NotifyInfo}> Notify Info Test </button>
    <button onClick={NotifySuccess}> Notify Success Test </button>
    <button onClick={NotifyError}> Notify Error Test </button>
    <button onClick={NotifyWarn}> Notify Warn Test </button>
  </div>)
}