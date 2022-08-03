/*
  Project: Deno Preactjs
  Created By: Lightnet
*/

export default async function handle(req){

  return new Response("Hello, api! AsyncFunction!",{status:200,headers:{'Content-Type':'text/html'}});
}