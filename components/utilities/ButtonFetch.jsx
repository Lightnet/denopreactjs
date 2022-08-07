/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
import { useState } from 'preact/hooks';
//import { useState } from "preact/compat";

export default function ButtonTimer() {
  // State for the counter
  const [count, setCount] = useState(0);

  function btnFetch(){
    console.log("fetch")
    fetch('/api/echo')
      //.then((response) => response.json())
      //.then((response) => response.blob())
      //.then((response) => response.formData())
      .then((response) => response.text())
      .then((data) => console.log(data));
  }

  return (
    <button onClick={btnFetch}> fetch </button>
  )
}