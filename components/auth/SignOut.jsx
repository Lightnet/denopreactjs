/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

// deno-lint-ignore-file

/** @jsx h */
import { h } from "preact"
import { useState, useContext } from "preact/hooks"
import { AuthContext } from "./AuthProvider.jsx";
import { axiosapi } from "../../libs/clientapi.js";
import { route } from "preact-router";
import { NotifyContext, NotifyColor } from "../notify/NotifyProvider.jsx"

export default function SignOut(){

  const {setUser, setUserInfo } = useContext(AuthContext);
  //const [alias, setAlias] = useState("");

  const { 
    //notifies,
    //setNotifies,
    setNotify
  } = useContext(NotifyContext);

  function btnSignOut(){
    //console.log("query")

    axiosapi.post('/api/signout',{
      api:"LOGOUT"
    }).then(response=>{
      console.log(response)
      if(response.data?.api==="LOGOUT"){
        console.log(response.data?.api)
        setUserInfo({})
        //setUser(response.data.user.alias)
        //console.log("USER NAME",response.data.user.alias)
        //setUser("Guest")
        setNotify({
          typ:NotifyColor.success,
          message:"Sign Out Successful!"
        })
        route("/",true);
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
    
    /*
    fetch('/signout',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({api:'SIGNOUT'})
    }).then(response=>{
      console.log(response)
    })
    */
  }

  function btnCancel(){
    route("/", true)
  }

  return (<div>
    <label>Are you sure you want to sign out?</label><br/>
    <button onClick={btnSignOut}>Logout</button>
    <button onClick={btnCancel}>Cancel</button>
  </div>)
}
