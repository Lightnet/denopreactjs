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

import ButtonFetch from "../utilities/ButtonFetch.jsx"
import ButtonTimer from "../utilities/ButtonTimer.jsx"
import BulletinBoardSlide from "../sliders/BulletinBoardSlide.jsx"

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
    <ButtonFetch/><br/>
    <ButtonTimer/><br/>
    <button onClick={clickOpen}>Modal</button><br/>

    <BulletinBoardSlide/><br/>


    {createPortal(<Modal width="200" isShow={isShowModal} onClose={onClose} enabledrag>
      <label>{message}</label> <button onClick={onClose}> x </button>
    </Modal>, container)}

  </div>)
}