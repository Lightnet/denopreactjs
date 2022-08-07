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
import { Link } from "https://unpkg.com/preact-router@4.1.0/dist/preact-router.module.js";
import {AdminContext} from "./AdminProvider.jsx"

export default function AdminNavMenu(props) {
  
  const { isLogin } = useContext(AdminContext);

  return (<div>
    <Link href="/admin">Home</Link><span> | </span>
    {isLogin ? (<Fragment>
      <Link href="/permissions">Permissions</Link><span> | </span>
      <Link href="/logs">Logs</Link><span> | </span>
      <Link href="/bans">Bans</Link><span> | </span>
      <Link href="/reports">Reports</Link><span> | </span>
      <Link href="/settings">Settings</Link><span> | </span>
      <Link href="/signout">Sign Out</Link><span> | </span>
      </Fragment>
    ):(<Fragment>
        <Link href="/signin">Sign In</Link><span> | </span>
      </Fragment>)}
  </div>)
}
