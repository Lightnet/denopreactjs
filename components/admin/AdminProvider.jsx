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
  useMemo 
} from "preact/hooks"
import { isObjEmpty } from "../../libs/helper.js"

export const AdminContext = createContext({});

export default function AdminProvider(props) {
  const [user, setUser] = useState("Guest")
  const [userInfo, setUserInfo] = useState({})
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    if(!isObjEmpty(userInfo)){
      console.log("PASS")
      console.log(userInfo)
      if(userInfo.alias){
        setUser(userInfo.alias)
        setIsLogin(true)
      }
    }else{
      console.log("FAIL")
      setIsLogin(false)
      setUser("Guest")
    }
  },[userInfo])

  const auth = useMemo(() => {
    return { 
      user, setUser,
      userInfo, setUserInfo,
      isLogin, setIsLogin
    }
  }, [
    user, 
    userInfo, 
    isLogin
  ])

  return (
    <AdminContext.Provider value={auth}>
      {props.children}
    </AdminContext.Provider>
  )
}