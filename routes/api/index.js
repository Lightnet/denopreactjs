/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet

  Information:
    Check for handler request
*/

export default function handle(req){

  return new Response("Hello, api! Function!",{status:200,headers:{'Content-Type':'text/html'}});
}