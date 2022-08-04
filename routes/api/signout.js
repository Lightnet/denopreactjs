/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

import cookie from "cookie";

// deno-lint-ignore require-await
export default async function handler(req){
  console.log("clear cookie!");


  //clear token
  return new Response(JSON.stringify({api:"LOGOUT"}),{status:200,headers:{
    'Set-Cookie':cookie.serialize('token','',{
      httpOnly: true,
      path:"/",
      maxAge:0,
      //expires: Date.now()
    })
  }});
}