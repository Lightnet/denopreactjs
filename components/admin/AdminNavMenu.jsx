/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h, createContext, Fragment } from "preact"
import { 
  useEffect, 
  useState, 
  useMemo 
} from "preact/hooks"
import { isObjEmpty } from "../../libs/helper.js"
import { Link } from "https://unpkg.com/preact-router@4.1.0/dist/preact-router.module.js";
import {AdminContext} from "./AdminProvider.jsx"

export default function AdminNavMenu(props) {
  
  const { isLogin } = createContext(AdminContext);

  return (<div>
    <Link href="/admin">Home</Link><span> | </span>
    {isLogin ? (<Fragment>
      <Link href="/settings">Settings</Link><span> | </span>
      <Link href="/signout">Sign Out</Link><span> | </span>
      </Fragment>
    ):(<Fragment>
        <Link href="/signin">Sign In</Link><span> | </span>
      </Fragment>)}
  </div>)
}
