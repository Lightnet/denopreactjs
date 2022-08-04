/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

import {
  getToDoList,
  addToDoList,
  updateToDoList,
  deleteToDoList
} from "../../libs/db/todolist.js"

export default async function handle(req){

  //console.log(req.method)

  if(req.method==="GET"){
    const items = await getToDoList();
    //console.log(items)
    return new Response(JSON.stringify({
      api:"LIST",
      list:items
    }),{status:200,headers:{'Content-Type':'text/html'}});
  }

  if(req.method==="POST"){
    const data = await req.json();
    console.log(data);
    const items = await addToDoList(data.content);
    console.log(items)
    if(items){
      return new Response(JSON.stringify({
        api:"CREATE",
        item:items
      }),{status:200,headers:{'Content-Type':'text/html'}});
    }else{
      return new Response("Uh oh!!\n get list!",{status:500});
    }
  }

  if(req.method==="PUT"){

    const data = await req.json();
    console.log(data);
    const items = await updateToDoList(data.id,data.content);
    console.log("items")
    console.log(items)


    return new Response(JSON.stringify({
      api:"UPDATE",
      //list:items
    }),{status:200,headers:{'Content-Type':'text/html'}});
  }

  if(req.method==="DELETE"){
    const data = await req.json();
    //console.log(data);
    const isDelete = await deleteToDoList(data.id);
    console.log("isDelete: ",isDelete)
    if(isDelete){
      return new Response(JSON.stringify({
        api:"DELETE"
      }),{status:200,headers:{'Content-Type':'text/html'}});
    }else{
      return new Response(JSON.stringify({
        api:"FAILDELETE"
      }),{status:200,headers:{'Content-Type':'text/html'}});
    }
  }

  return new Response("ERROR",{status:404,headers:{'Content-Type':'application/json'}});
}