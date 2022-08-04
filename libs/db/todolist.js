import { sql } from "../database.js"
import { crypto } from "$std/crypto/mod.ts";
//import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export async function createTableToDoList(content){
  try{
    await sql`CREATE TABLE IF NOT EXISTS todolist (id TEXT, aliasId TEXT, content TEXT, date TEXT)`;
    console.log("CREATE")
  }catch(err){
    console.log(err)
  }
}

export async function getToDoList(options){  
  try{
    const items = await sql`SELECT id, content, date FROM todolist`;
    return items;
  }catch(e){
    console.log(e)
    return [];
  }
}

export async function addToDoList(content){
  try{
    const id = crypto.randomUUID();
    const sdate = String( Date.now())

    await sql`INSERT into todolist 
    (id,  content, date ) VALUES (${id},${content},${sdate})`;
    return {id,content};
  }catch(e){
    console.log(e)
    return null;
  }
}

export async function updateToDoList(id, content){
  try{
    await sql`UPDATE todolist 
      SET content = ${content}
      WHERE id = ${id}`;
    return true;
  }catch(e){
    console.log(e)
    return false;
  }
}

export async function deleteToDoList(id){
  try{
    await sql`DELETE FROM todolist WHERE id = ${id}`;
    return true;
  }catch(e){
    console.log(e)
    return false;
  }
}
