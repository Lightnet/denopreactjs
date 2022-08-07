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

export default function AdminSignin(props) {

  const { setUser, setUserInfo } = useContext(AdminContext);
  const [alias, setAlias] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [email, setEmail] = useState("");
  const container = document.getElementById('modals');

  const { setNotify } = useContext(NotifyContext);

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
          setNotify({
            typ:NotifyColor.success,
            message:"Login Successful!"
          })
          route("/admin",true);
          //route("/",true);
        }else if(response.data?.api=="FAIL"){
          //setMessage("Access Denied");
          //clickOpen()
          setNotify({
            typ:NotifyColor.warn,
            message:"Invalid Alias/Password !"
          })
        }else {
          //setMessage("ERROR");
          //clickOpen()
          //console.log("LOGIN ERROR")
          setNotify({
            typ:NotifyColor.error,
            message:"Sign in error!"
          })
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
    
    {/*
    createPortal(<Modal isShow={isShowModal} onClose={onClose}>
      <label>{message}</label> <button onClick={onClose}> x </button>
    </Modal>, container)
    */}

    {/* comments
    <button onClick={clickOpen}>Modal</button>
    */}
  </div>)
}