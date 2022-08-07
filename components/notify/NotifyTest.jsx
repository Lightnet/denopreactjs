/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
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
    setNotify({
      typ:NotifyColor.info,
      message:"test"
    })
  }

  function NotifySuccess(){
    setNotify({
      typ:NotifyColor.success,
      message:"test"
    })
  }

  function NotifyError(){
    setNotify({
      typ:NotifyColor.error,
      message:"test"
    })
  }

  function NotifyWarn(){
    setNotify({
      typ:NotifyColor.warn,
      message:"test"
    })
  }

  function NotifyWarnOff(){
    setNotify({
      typ:NotifyColor.warn,
      autoClose:false,
      message:"test"
    })
  }

  return (<div>
    <button onClick={NotifyInfo}> Notify Info Test </button>
    <button onClick={NotifySuccess}> Notify Success Test </button>
    <button onClick={NotifyError}> Notify Error Test </button>
    <button onClick={NotifyWarn}> Notify Warn Test </button>

    <button onClick={NotifyWarnOff}> Notify Warn Test Off </button>
  </div>)
}