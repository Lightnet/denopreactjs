/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet

  Information:
    To handle multiple view for scene

*/

/** @jsxRuntime classic */
/** @jsx h */

import { h } from "preact"
import { 
  useEffect, 
  useState, 
  useMemo 
} from "preact/hooks"
import { isObjEmpty } from "../../libs/helper.js"

export const ThreejsContext = createContext({});

export default function NotifyProvider(props) {

  const [eObject3Ds, setEObject3Ds] = useState(new Map())
  const [selectObject3DID, setSelectObject3DID] = useState("")

  const values = useMemo(() => {
    return { 
      eObject3Ds, setEObject3Ds,
      selectObject3DID, setSelectObject3DID,
    }
  }, [
    eObject3Ds, 
    selectObject3DID, 
  ])

  return (
    <ThreejsContext.Provider value={values}>
      {props.children}
    </ThreejsContext.Provider>
  )
}
