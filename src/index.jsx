/*
  Project: Deno Preactjs
  Created By: Lightnet
*/

// https://www.digitalocean.com/community/tutorials/how-to-dynamically-import-javascript-with-import-maps

/** @jsx h */
import { h } from "preact"

export default function(){

  return (
  <html>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Hello World</title>
      <script type="importmap" src="/importmap.json">
        
      </script>
      <script type="text/babel" src="/app.jsx"></script>
    </head>
    <body>
      <div>
        <label>Hello World! Preact!</label>
      </div>
    </body>
  </html>)
}