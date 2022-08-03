/*
  Project: Deno Preactjs
  Created By: Lightnet
*/

export default function handle(req){

  return new Response("Hello, api! Function!",{status:200,headers:{'Content-Type':'text/html'}});
}