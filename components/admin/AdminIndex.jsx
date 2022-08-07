/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h, Fragment } from "preact"
import { 
  useEffect, 
  useState, 
  useMemo,
  useContext
} from "preact/hooks"
import { isObjEmpty } from "../../libs/helper.js"
import {AdminContext} from "./AdminProvider.jsx"

export default function AdminIndex(props) {

  const { isLogin, user } = useContext(AdminContext);
  //console.log(isLogin)
  //console.log(user)
  useEffect(()=>{
    console.log("user: ",user)
  },[user])
  //<label> isLogin:{isLogin ? 'true':'false'} </label>
  return (<div>
    <label> Alias: {user} </label><br/>
    
    {isLogin ? (<Fragment>
      <label>Login!</label>
      </Fragment>
    ):(<Fragment>
        <label>Login Required!</label>
      </Fragment>)}
  </div>)
}