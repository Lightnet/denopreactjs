/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

/** @jsx h */
import { h } from "preact"
import { 
//  useState, 
//  useEffect, 
  useContext 
} from "preact/hooks"
import { AuthContext } from "../auth/AuthProvider.jsx"

export default function Home(){
  const { user } = useContext(AuthContext);
  //console.log(crypto)
  //console.log(crypto.randomUUID())

  //useEffect(()=>{
    //setUserName(user);
  //},[user])

  return (<div>
    <label>Hello, {user}! </label>
    <p> Welcome to Deno runtime javascript, Preact and development build.</p>
  </div>)
}