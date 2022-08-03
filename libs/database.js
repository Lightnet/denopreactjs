/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

//import postgres from 'https://deno.land/x/postgresql/mod.js' // fail
//import { DataTypes, Database, Model, PostgresConnector } from 'https://deno.land/x/denodb/mod.ts'; //fail
//import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts"; // p
import postgres from 'https://deno.land/x/postgresjs/mod.js' // p

let db;

// deno-lint-ignore require-await
async function initDB(){
  if(!db){
    console.log("Init DB!")
    //db = postgres({}) // will default to the same as psql
    /*
    db = new Client({
      user: "test",
      password:"test",
      database: "test",
      hostname: "localhost",
      port: 5432,
    });
    await db.connect();
    */
  }else{
    console.log("READY DB!")
  }
}

function getDB(){
  console.log("Database");
}

function closeDB(){

}

const sql = postgres({ /* options */ 
  user: "test",
  password:"test",
  database: "test",
}) // will use psql environment variables

async function createTableUser(){
  const result = await sql`CREATE TABLE IF NOT EXISTS users (id INTEGER, alias TEXT, salt TEXT, hash TEXT)`;
  console.log("create table user result")
  console.log(result)
}

async function createTableCharacter(){
  const result = await sql`CREATE TABLE IF NOT EXISTS character (id INTEGER, alias TEXT, salt TEXT, hash TEXT)`;
  console.log("create table user result")
  console.log(result)
}

function initTables(){
  createTableUser();
  createTableCharacter();
}

export{
  initDB,
  getDB,
  closeDB,
  initTables,
  sql
}







