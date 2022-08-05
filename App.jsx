/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsx h */
import { h } from "preact"
//import Button from "./components/Button.jsx";
import PortalModal from "./components/modal/PortalModal.jsx"

import AuthProvider from "./components/auth/AuthProvider.jsx"
import AccessTopBar from "./components/AccessTopBar.jsx"
import PageRoutes from "./components/PageRoutes.jsx"
import ThemeProvider from "./components/theme/ThemeProvider.jsx"
import NotifyProvider from "./components/notify/NotifyProvider.jsx"
import PortalNotify from "./components/notify/PortalNotify.jsx"
import NotifyManager from "./components/notify/NotifyManager.jsx"
import NotifyTest from "./components/notify/NotifyTest.jsx"

export default function App(){

  return (<ThemeProvider>
    <AuthProvider>
      <NotifyProvider>
        <AccessTopBar/>
        <PageRoutes/>
        <PortalModal/>
        <NotifyManager/>
        <NotifyTest/>
        <PortalNotify/>
      </NotifyProvider>
    </AuthProvider>
  </ThemeProvider>)
}
// <NotifyManager/>