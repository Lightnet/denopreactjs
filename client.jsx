/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

import { render } from "preact"
import App from "./App.jsx"
render(App(), document.body)

let loading = document.getElementById("loading")
if(loading){
  loading.remove()
}

console.log("Hello World! Preact!");