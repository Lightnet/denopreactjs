/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// deno-lint-ignore require-await
export default async function handler(req){
  console.log("Hello!");

  return new Response(JSON.stringify({api:"ERROR"}),{headers:{'Content-Type':'application/json'}});
}