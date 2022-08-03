/*
  Project:Deno Preact
  Created By: Lightnet
*/


/** @jsx h */
import { h, render } from "preact"
import App from "./App.jsx"
render(App(), document.body)

let loading = document.getElementById("loading")
if(loading){
  loading.remove()
}

console.log("Hello World! Preact!");