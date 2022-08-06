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
import { createPortal } from 'preact/compat';
import DisplayUser from "../auth/DisplayUser.jsx"
import NotifyTest from "../notify/NotifyTest.jsx"
import Modal from "../modal/Modal.jsx";

export default function TestLab(){


  const [isShowId, setIsShowId] = useState(false);


  const [isShowModal, setIsShowModal] = useState(false);
  const [message, setMessage]= useState("Hello World");

  const container = document.getElementById('modals');

  function onClose(){
    setIsShowModal(false);
  }

  function clickOpen(){
    setIsShowModal(true);
  }

  return (<div>
    <DisplayUser/><br/>
    <NotifyTest/><br/>
    <br/>
    <button onClick={clickOpen}>Modal</button>
    {createPortal(<Modal isShow={isShowModal} onClose={onClose}>
      <label>{message}</label> <button onClick={onClose}> x </button>
    </Modal>, container)}

  </div>)
}