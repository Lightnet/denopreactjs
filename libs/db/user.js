

import { sql } from "../database.js"
import { crypto } from "$std/crypto/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export async function checkUser(userName){
  const users = await sql`SELECT id, alias, hash, salt FROM users WHERE alias = ${userName}`;
  //console.log("[[[[users")
  //console.log(users)
  return users;
}

export async function addUser(userName, pass){
  const salt = await bcrypt.genSalt(8);
  const hash = await bcrypt.hash(pass, salt);
  const id = crypto.randomUUID();
  const users = await sql`INSERT into users 
  (id, alias, hash, salt ) VALUES (${id},${userName},${hash},${salt})`;
  return users;
}

export async function createTableUser(){
  const result = await sql`CREATE TABLE IF NOT EXISTS users (id TEXT, alias TEXT, salt TEXT, hash TEXT)`;
  console.log("create table user result")
  console.log(result)
}

export async function deleteTableUser(){
  const result = await sql`DROP TABLE IF EXISTS users`;
  console.log("create table user result")
  console.log(result)
}