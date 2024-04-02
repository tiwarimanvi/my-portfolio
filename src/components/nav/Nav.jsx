import React from 'react'
import { GoHome } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';

import './nav.css'
const Nav = () => {
  const[activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active': ''}><GoHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active': ''}><LuUser2 /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active': ''}><RiBook2Line /></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'? 'active': ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActiveNav('contact')} className={activeNav==='#contact'? 'active': ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
