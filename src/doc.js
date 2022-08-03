/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

import { parseHTML } from "https://esm.sh/linkedom";

const { document, customElements, HTMLElement } = parseHTML(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello from Deno</title>
    <meta charset="utf-8"/>
  	<meta name="description" content="bun preact render dev build">
  	<meta name="keywords" content="HTML, Javascript, Preact. Bun">
  	<meta name="author" content="John Doe">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'nonce-n0nce'" />
    <script async src="https://unpkg.com/es-module-shims@1.5.9/dist/es-module-shims.js" nonce="n0nce"></script>
    <script type="importmap" nonce="n0nce">
    {
      "imports":{
        "axios":"https://unpkg.com/@bundled-es-modules/axios",
        "preact":"https://unpkg.com/preact@latest?module",
        "preact/jsx-runtime":"https://unpkg.com/preact@latest/jsx-runtime/dist/jsxRuntime.module.js",
        "preact/hooks":"https://unpkg.com/preact@latest/hooks/dist/hooks.module.js",
        "preact-router":"https://unpkg.com/preact-router@latest/dist/preact-router.module.js",
        "preact-async-route":"https://unpkg.com/preact-async-route?module"
      }
    }
    </script>
<script type="module" defer nonce="n0nce">
// For Testing if the code works
  import {h} from "preact";
  console.log(h)
  console.log("Test Preact Here?");
</script>
    <script type="module" src="client.jsx" nonce="n0nce"></script>
  </head>
  <body>
    <label id="loading">Loading...</label>
  </body>
</html>`);

customElements.define(
  "custom-element",
  class extends HTMLElement {
    connectedCallback() {
      console.log("it works 🥳");
    }
  },
);

document.body.appendChild(document.createElement("custom-element"));
//document.toString(); // the string of the document, ready to send to a client
//console.log(document.toString())
export {
  document
}