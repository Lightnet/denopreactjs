/*
  Project Name: Bun Preact
  License: MIT
  Created By: Lightnet

  browser client
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact";
import { 
  useEffect, 
  useState,
  useContext
} from "preact/hooks";
import { capFirstLetter } from "../../libs/helper.js"

import { ThemeContext } from "./ThemeProvider.jsx";

export default function ToggleTheme(){
  
  const {theme, setTheme} = useContext(ThemeContext);
  //const _theme = useContext(ThemeContext);

  useEffect(()=>{
    //console.log(_theme)
  },[])

  function switchTheme(){
    console.log("switchTheme")
    if(!window.localStorage){
      console.log("NOT FOUND!")
      return;
    }
    
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    if (currentTheme === "light") {
      targetTheme = "dark";
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
    setTheme(targetTheme);
    localStorage.setItem('theme', targetTheme);
  }

  function toggleTheme(e){
    e.preventDefault();
    switchTheme();
  }

  return (
    <a href="#" onClick={toggleTheme}>Theme {capFirstLetter(theme)}</a>
  )
}
