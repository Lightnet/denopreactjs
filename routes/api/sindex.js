/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet

  Information:
    Check for sync handler request
*/

export default async function handle(req){

  return new Response("Hello, api! AsyncFunction!",{status:200,headers:{'Content-Type':'text/html'}});
}