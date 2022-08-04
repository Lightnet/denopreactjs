/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

import { crypto } from "$std/crypto/mod.ts";
import cookie from "cookie";
import { checkUser } from "../../libs/db/user.js"
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import  { createJWT } from "../../libs/serverapi.js"
import { config } from "dotenv";
const { SECRET }= config();

// deno-lint-ignore require-await
export default async function handle(req){
  const data = await req.json();
  //console.log(data)
  const users = await checkUser(data.alias);
  //console.log("users Len: ", users.length)
  //console.log(users)
  if(users.length==1){
    //console.log("FOUND USER")
    const user = users[0];
    //console.log(user.salt)
    //console.log(user.hash)
    const uuid = crypto.randomUUID();
    const result = bcrypt.compareSync(data.pass, user.hash);
    //console.log("result: ", result)
    if(result){
      const headers = new Headers();

      const payload={
        uuid:uuid,
        id:user.id,
        alias:user.alias,
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
      return new Response(JSON.stringify({
        api:"TOKEN",
        user:payload
      }),{headers:{
        'Set-Cookie':encodeToken,
        'Content-Type':'application/json'
      }});
    }else{
      return new Response(JSON.stringify({
        api:"FAIL"
      }),{headers:{'Content-Type':'application/json'}});
    }
  }else{
    console.log("NOT FOUND USER")
    return new Response(JSON.stringify({api:"ERROR"}),{headers:{'Content-Type':'application/json'}});
  }
}