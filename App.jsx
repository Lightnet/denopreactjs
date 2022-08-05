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

export default function App(){

  return (<ThemeProvider>
    <AuthProvider>
      <AccessTopBar/>
      <PageRoutes/>
      <PortalModal/>
    </AuthProvider>
  </ThemeProvider>)
  
}