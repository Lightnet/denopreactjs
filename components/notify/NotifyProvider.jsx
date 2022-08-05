/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

/** @jsx h */
import { h, createContext } from "preact"
import { 
  useEffect, 
  useState, 
  useMemo 
} from "preact/hooks"
import { isObjEmpty } from "../../libs/helper.js"

export const NotifyContext = createContext({});

export default function NotifyProvider(props) {
  const [notifies, setNotifies] = useState(new Map())
  const [notify, setNotify] = useState(null)

  useEffect(()=>{

  },[])

  const values = useMemo(() => {
    return { 
      notifies, setNotifies,
      notify, setNotify,
    }
  }, [
    notifies, 
    notify, 
  ])

  return (
    <NotifyContext.Provider value={values}>
      {props.children}
    </NotifyContext.Provider>
  )
}