/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

import { checkUser, addUser} from "../../libs/db/user.js"

// deno-lint-ignore require-await
export default async function handler(req){
  console.log("Hello!");
  //console.log(req)
  console.log(req.method)
  const data = await req.json();
  console.log(data)
  const users = await checkUser(data.alias);
  console.log("users>>>", users.length)
  console.log(users)
  if(users.length==0){
    console.log("CREATING...")
    const result = await addUser(data.alias,data.pass)
    console.log(result)
    return new Response(JSON.stringify({api:"CREATE"}),{headers:{'Content-Type':'application/json'}});
  }else{
    console.log("EXIST!")
    return new Response(JSON.stringify({api:"EXIST"}),{headers:{'Content-Type':'application/json'}});
  }

  //return new Response(JSON.stringify({api:"ERROR"}),{headers:{'Content-Type':'application/json'}});
}