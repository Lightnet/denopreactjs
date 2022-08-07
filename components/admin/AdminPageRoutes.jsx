/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
/*
import { h, createContext } from "preact"
import { 
  useEffect, 
  useState, 
  useMemo 
} from "preact/hooks"
import { isObjEmpty } from "../../libs/helper.js"
*/
import Router from "https://unpkg.com/preact-router@4.1.0/dist/preact-router.module.js";
import AsyncRoute from "https://unpkg.com/preact-async-route@2.2.1/src/index.js?module";
import AdminIndex from "./AdminIndex.jsx"
import Loading from "../Loading.jsx"

export default function AdminPageRoutes(props) {

  return (<Router>
    <AdminIndex path="/admin" />
    <AsyncRoute
      path="/settings"
      getComponent={() => import("./AdminSettings.jsx").then(module => module.default)}
      loading={()=>{return <Loading/>}}
    />
    <AsyncRoute
      path="/signin"
      getComponent={() => import("./AdminSignin.jsx").then(module => module.default)}
      loading={()=>{return <Loading/>}}
    />
  </Router>)
}
/*
<Router>
    <AdminIndex path="/" />
    <AsyncRoute
      path="/account"
      getComponent={() => import("./AdminIndex.jsx").then(module => module.default)}
      loading={()=>{return <Loading/>}}
    />
    <AdminIndex default />
  </Router>
*/