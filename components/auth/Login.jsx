/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

// deno-lint-ignore-file

/** @jsx h */
import { h } from "preact"
import { useState, useEffect, useContext } from "preact/hooks";
import { AuthContext } from "./AuthProvider.jsx";
import { axiosapi } from "../../libs/clientapi.js";
import { route } from "preact-router";
import { createPortal } from 'preact/compat';
import Modal from "../modal/Modal.jsx";

export default function ELogin(){
  const { setUser, setUserInfo } = useContext(AuthContext);

  const [alias, setAlias] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [email, setEmail] = useState("");
  const container = document.getElementById('modals');

  const [message, setMessage]= useState("");
  const [isShowModal, setIsShowModal] = useState(false);

  function onClose(){
    setIsShowModal(false);
  }

  function clickOpen(){
    setIsShowModal(true);
  }

  useEffect(()=>{
    //const container = document.getElementById('modals');
  },[])

  function inputAlias(event){
    setAlias(event.target.value)
  }

  function inputPassphrase(event){
    setPassphrase(event.target.value)
  }

  function btnLogin(){
    //console.log("query")
    axiosapi.post('/api/signin',{
      alias:alias,
      pass:passphrase
    }).then(response=>{
      console.log(response)
      if(response.status==200){
        //console.log(response.data?.api)
        if(response.data?.api=="TOKEN"){
          //console.log("USER NAME",response.data.user.alias)
          setUserInfo(response.data.user)
          //setUser(response.data.user.alias)
          route("/",true);
        }else if(response.data?.api=="FAIL"){
          setMessage("Access Denied");
          clickOpen()
        }else {
          setMessage("ERROR");
          clickOpen()
          console.log("LOGIN ERROR")
        }
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  function btnCancel(){
    route("/",true)
  }

  return (<div>
    <table>
      <tbody>
        <tr>
          <td colspan="2">
            <label>Login </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>Alias: </label>
          </td><td>
            <input value={alias} onInput={inputAlias} /><br/>
          </td>
        </tr><tr>
          <td>
            <label>Passphrase: </label>
          </td>
          <td>
            <input value={passphrase} onInput={inputPassphrase} />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span style="float:right;">
            <button onClick={btnLogin}>Login</button>
            <button onClick={btnCancel}>Cancel</button>    
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    
    {createPortal(<Modal isShow={isShowModal} onClose={onClose}>
      <label>{message}</label> <button onClick={onClose}> x </button>
    </Modal>, container)}

    {/* comments
    <button onClick={clickOpen}>Modal</button>
    */}
  </div>)
}
