/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
import { 
  useState, 
  useEffect, 
  useContext 
} from "preact/hooks"
//import DisplayUser from "../auth/DisplayUser.jsx"
import AdminPageRoutes from "../admin/AdminPageRoutes.jsx"
import AdminNavMenu from "../admin/AdminNavMenu.jsx"

export default function Admin(){
  //const [isShowId, setIsShowId] = useState(false);

  return (<div style="width:100%; height:100%;">
    <AdminNavMenu/>
    <AdminPageRoutes/>
  </div>)
}