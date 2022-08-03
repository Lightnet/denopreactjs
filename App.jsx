/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsx h */
import { h } from "preact"
//import Button from "./components/Button.jsx";

import AuthProvider from "./components/auth/AuthProvider.jsx"
import AccessTopBar from "./components/AccessTopBar.jsx"
import PageRoutes from "./components/PageRoutes.jsx"
import ThemeProvider from "./components/theme/ThemeProvider.jsx"

export default function App(){

  return (<ThemeProvider>
    <AuthProvider>
      <AccessTopBar/>
      <PageRoutes/>
    </AuthProvider>
  </ThemeProvider>)
  
}