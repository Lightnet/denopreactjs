import { sql } from "../database.js"

export async function checkUser(userName){
  const users = await sql`SELECT id, alias FROM users WHERE alias = ${userName}`;
  console.log("[[[[users")
  console.log(users)
  return users;
}

export async function addUser(userName, pass){
  const users = await sql`INSERT into users 
  (alias, hash ) VALUES (${userName},${pass})`;
  return users;
}