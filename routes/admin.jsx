/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */

import { h } from "preact"
//import AdminPage from "../components/pages/Admin.jsx";
import AdminProvider from "../components/admin/AdminProvider.jsx";
import AdminPageRoutes from "../components/admin/AdminPageRoutes.jsx"
import AdminNavMenu from "../components/admin/AdminNavMenu.jsx"
import NotifyProvider from "../components/notify/NotifyProvider.jsx"
import ThemeProvider from "../components/theme/ThemeProvider.jsx"
import PortalNotify from "../components/notify/PortalNotify.jsx"
import NotifyManager from "../components/notify/NotifyManager.jsx"
import PortalModal from "../components/modal/PortalModal.jsx"

//for server
//export function handle(req){
  //return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
//}

function App() {
  return (
  <ThemeProvider>
    <NotifyProvider>
      <AdminProvider>
        <AdminNavMenu/>
        <AdminPageRoutes/>
        <PortalModal/>
        <NotifyManager/>
        <PortalNotify/>
      </AdminProvider>
    </NotifyProvider>
  </ThemeProvider>)
}
//
export default App;