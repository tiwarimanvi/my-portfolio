import React from 'react'
import { GoHome } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";


import './nav.css'
const Nav = () => {
  return (
    <nav>
      <a href="#"><GoHome/></a>
      <a href="#about"><LuUser2 /></a>
      <a href="#experience"><RiBook2Line /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
