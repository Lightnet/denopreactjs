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

export default function Logs(props) {

  return (<div>
    <label>Logs</label>
  </div>)
}