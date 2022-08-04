/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/
import cookie from "cookie";
import { config } from "dotenv";
import  { createJWT } from "../../libs/serverapi.js"
const { SECRET }= config();

export default function handle(req){
  const headers = new Headers();

  const payload={
    uuid:"a",
    id:"asd",
    alias:"asdd",
    exp: (Date.now()+100)
  }
  const token = createJWT(payload, SECRET);
  //console.log(token)
  const encodeToken = cookie.serialize('token',token,{
    httpOnly: true,
    path:"/",
    //maxAge: 60 * 60 * 24 * 7 // 1 week
    //maxAge: 60 * 60 * 24  // 1 day ?
    maxAge: 60  // 60 sec?
  })

  headers.set('Set-Cookie', encodeToken)
  headers.set('Content-Type','application/json')
  return new Response('cookie Echo!',{headers});
}