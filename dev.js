/*
  Project: Deno Preactjs
  Created By: Lightnet
*/

// https://humanwhocodes.com/snippets/2020/10/read-environment-variables-deno/
// https://deno.land/manual/runtime/http_server_apis
// https://deno.land/manual/runtime/program_lifecycle

import * as path from "https://deno.land/std/path/mod.ts";
// https://deno.land/std@0.150.0/fs
import * as fs from "https://deno.land/std/fs/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { serve } from "$std/http/server.ts";
//import render from "preact-render-to-string"; //component to string render to html
//import { transformSync } from "https://esm.sh/@babel/core";
import * as babelCore from "https://esm.sh/@babel/core";
//import * as babelCore from "https://unpkg.com/@babel/standalone";
//import * as babelEnv from "https://unpkg.com/@babel/preset-env";
// babel-standalone
import * as presetReact from "https://esm.sh/@babel/preset-react";
import transformReactJsx from "https://esm.sh/@babel/plugin-transform-react-jsx";
//import { document } from "./src/doc.js";// html doc string
//console.log(document.toString())
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
console.log(__filename)
console.log(__dirname)

//console.log(config());
const { 
  PORT
, SECRET
, ENVIRONMENT 
}= config();

//console.log(Deno)
//console.log("PORT: ", PORT)
//console.log("SECRET: ", SECRET)
//console.log("ENVIRONMENT: ", ENVIRONMENT)

const port = Number(PORT) || 3000
console.log(port)
// API and ROUTES
console.log("Deno.cwd()")
console.log(Deno.cwd())
console.log("INIT SET UP FILES...")

async function loadImportModule(fileName){
  try{
    console.log(fileName)
		const m = await import(fileName).then(module => {
      //return {default:module.default,handler:module.handler }
      //console.log(module)
      return module
		});
		//console.log("m fun:",fileName)
		//console.log(m.constructor.name) // check for AsyncFunction and Function tags  
		console.log(m)
		return m;
	}catch(e){
		console.log("ERROR HANDLE LOADING...")
		console.log(e)
		return null;
	}
}

const apiUrls = new Map();
// Async
async function apiFilesNames() {
  for await (const entry of fs.walk(Deno.cwd()+"/routes/api")) {
    if(entry.path.endsWith('.js')){
      console.log(entry.path);
      const pageName = "/api/"+entry.name.split(".")[0];
      const pageModule = await loadImportModule("./routes/api/"+entry.name)
      apiUrls.set(pageName,{
        fileName:entry.name,
        handler: pageModule.default || null
      })
    }
  }
}
apiFilesNames().then(() => console.log("API Files Done!"));

const routeUrls = new Map();
// Async
async function routeFilesNames() {
  for await (const entry of fs.walk(Deno.cwd()+"/routes/")) {
    if(entry.path.endsWith('.jsx')){
      //console.log(entry)
      console.log(entry.path);
      const pageName = "/"+entry.name.split(".")[0];
      console.log("pageName:", pageName)
      //if(pageName=="/index"){//default url
        //const pageModule = await loadImportModule("file://"+entry.path)
        const pageModule = await loadImportModule("./routes/"+entry.name)
        routeUrls.set(pageName,{
          page:pageModule.default || null,
          fileName:entry.name,
          handler: pageModule.handler || null
        })
      //}else{
        //routeUrls.set(pageName,{
          //page:null,
          //handler:null
        //})
      //}
    }
  }
}
routeFilesNames().then(() => console.log("Routes Files Done!"));


//BROWSER CLIENT REQUEST HANDLER
async function fetch(req) {
  const pathname = new URL(req.url).pathname;
  //console.log("pathname",pathname);

  if(pathname=='favicon.ico'){
    return new Response("",{status:404});  
  }

  //CHECK PATH API 
	if(pathname.search("/api/")==0){
    
    if(apiUrls.has(pathname)==true){//match file name
      const APIName = apiUrls.get(pathname);
      console.log(APIName)
			try{
				if(APIName.handler){
					if(APIName.handler.constructor.name=='Function'){
            console.log("Function")
						return APIName.handler(req)
					}else if (APIName.handler.constructor.name=='AsyncFunction'){
            console.log("AsyncFunction")
						return await APIName.handler(req);
					}else{
						return new Response("Uh oh!!\n", { status: 500 });	
					}
				}else{
					return new Response("Uh oh!!\n", { status: 500 });
				}
			}catch(e){
				return new Response("Uh oh!!\n"+e.toString(), { status: 500 });
			}
    }else{
      return new Response("Uh oh!!\n", { status: 500 });
    }
  }

  //need more detail which is parms matches
  if(routeUrls.has(pathname)==true){
    const pageModule = routeUrls.get(pathname)
    console.log(pageModule)
    try{
      if(pageModule.handler){
        if(pageModule.handler.constructor.name=='Function'){
          return pageModule.handler(req)
        }else if (pageModule.handler.constructor.name=='AsyncFunction'){
          return await pageModule.handler(req);
        }
      }
      //check page doc for render

    }catch(e){
      return new Response("Uh oh!!\n"+e.toString(), { status: 500 });
    }
  }

  if(pathname=='/'){
    const textHtml = await Deno.readTextFile("./index.html");
    return new Response(textHtml,{status:200,headers:{'Content-Type':'text/html'}});
    //return new Response(document.toString(),{status:200,headers:{'Content-Type':'text/html'}});
  }

  //filename.jsx
  if(pathname.endsWith('.jsx')){
    //console.log("FOUND", pathname)
    //const importUrl = new URL("./"+"import-map.json", import.meta.url);
    //console.log("importMapPath:",importUrl.toString())
    //console.log(new URL('import_map.json', import.meta.url).toString())
    //console.log(await Deno.emit(url))
    //console.log("url.toString()")
    //const url = new URL("."+pathname, import.meta.url);
    //console.log(url.toString())
    let result = "";
    try{
      //                      "./app.js"      "file:///x:/projects/denopreactjs/dev.js"
      //const fileName = new URL("."+pathname, import.meta.url)
      //console.log("fileName: ", fileName.toString())
      //let textJSX = await Deno.readTextFile(fileName);
      
      const CWDFilePath = "."+pathname;
      console.log("CWDFilePath: ",CWDFilePath)
      let textJSX = await Deno.readTextFile(CWDFilePath);
      //console.log(textJSX);
      
      textJSX = textJSX.replace('/** @jsxRuntime classic */','')
      //textJSX = textJSX.replace('/** @jsx h */','/** @jsxImportSource https://esm.sh/preact */')
      
      //console.log(babelCore)
      result = babelCore.transformSync(textJSX, {
        "presets": [
          //babelEnv,
          presetReact
        ],
        //plugins: ["@babel/plugin-transform-react-jsx"],
        "plugins": [transformReactJsx],
      });
      console.log(result.code)
    }catch(e){
      console.log("ERROR?")
      console.log(e)
    }
    return new Response(result.code,{ status:200, headers:{'Content-Type':'text/javascript'} });
    //return new Response("Hello, World!",{headers:{'Content-Type':'text/javascript'} });
  }

  return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
}

const handler = (e) => {
  console.log(`got ${e.type} event in event handler (main)`);
};

globalThis.addEventListener("load", handler);

globalThis.addEventListener("beforeunload", handler);

globalThis.addEventListener("unload", handler);

globalThis.onload = (e) => {
  //console.log(`got ${e.type} event in onload function (main)`);
  //basic set up server or serve http
  serve(fetch,{port:port});
};

globalThis.onbeforeunload = (e) => {
  //console.log(`got ${e.type} event in onbeforeunload function (main)`);
};

globalThis.onunload = (e) => {
  //console.log(`got ${e.type} event in onunload function (main)`);
};


/*
async function serveHttp(conn) {
  // This "upgrades" a network connection into an HTTP connection.
  const httpConn = Deno.serveHttp(conn);
  // Each request sent over the HTTP connection will be yielded as an async
  // iterator from the HTTP connection.
  for await (const requestEvent of httpConn) {
    // The native HTTP server uses the web standard `Request` and `Response`
    // objects.
    const body = `Your user-agent is:\n\n${
      requestEvent.request.headers.get("user-agent") ?? "Unknown"
    }`;
    
    // The requestEvent's `.respondWith()` method is how we send the response
    // back to the client.
    requestEvent.respondWith(
      new Response(body, {
        status: 200,
      }),
    );
  }
}

// Start listening on port 8080 of localhost.
const server = Deno.listen({ port: 3000 });

// Connections to the server will be yielded up as an async iterable.
for await (const conn of server) {
  // In order to not be blocking, we need to handle each connection individually
  // without awaiting the function
  serveHttp(conn);
}
*/

console.log("log from main script");