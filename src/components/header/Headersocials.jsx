import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


const Headersocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" targer="_blank"><BsLinkedin/></a>
      <a href="https://github.com" targer="_blank"><FaGithub/></a>
      <a href="https://linkedin.com" targer="_blank"><RiTwitterXFill /></a>
    </div>
  )
}

export default Headersocials
