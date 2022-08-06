/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

/** @jsx h */
import { h } from "preact"
import { 
  useState, 
  useEffect, 
  useContext 
} from "preact/hooks"
import DisplayUser from "../auth/DisplayUser.jsx"
import NotifyTest from "../notify/NotifyTest.jsx"

export default function TestLab(){
  const [isShowId, setIsShowId] = useState(false);

  return (<div>
    <NotifyTest/>


  </div>)
}