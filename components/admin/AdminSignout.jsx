/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h, createContext } from "preact"
import { 
  useEffect, 
  useState, 
  useMemo,
  useContext
} from "preact/hooks"
import { isObjEmpty } from "../../libs/helper.js"
import { axiosapi } from "../../libs/clientapi.js";
import { NotifyContext, NotifyColor } from "../notify/NotifyProvider.jsx"
import { AdminContext } from "./AdminProvider.jsx"
import { route } from "https://unpkg.com/preact-router@4.1.0/dist/preact-router.module.js";

export default function AdminSignout(props) {

  const { setUser, setUserInfo } = useContext(AdminContext);
  const { setNotify } = useContext(NotifyContext);

  function btnSignOut(){
    //console.log("query")

    axiosapi.post('/api/signout',{
      api:"LOGOUT"
    }).then(response=>{
      console.log(response)
      if(response.data?.api==="LOGOUT"){
        console.log(response.data?.api)
        setUserInfo({})
        setNotify({
          typ:NotifyColor.success,
          message:"Sign Out Successful!"
        })
        route("/admin",true);
      }else{
        console.log("LOGIN ERROR")
        setNotify({
          typ:NotifyColor.error,
          message:"Sign Out Error!"
        })
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  function btnCancel(){
    route("/admin", true)
  }

  return (<div>
    <label>Are you sure you want to sign out?</label><br/>
    <button onClick={btnSignOut}>Logout</button>
    <button onClick={btnCancel}>Cancel</button>
  </div>)
}