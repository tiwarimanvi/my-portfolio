import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { RiFolder2Fill } from "react-icons/ri";


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About Me</h2>
      <div className='.container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
        <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
              <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ years</small>
              </article>
              <article className='about__card'>
              <TbUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ clients</small>
              </article>
              <article className='about__card'>
              <RiFolder2Fill className='about__icon'/>
                <h5>projects</h5>
                <small>5+ projects</small>
              </article>
            </div>
            <p className='about__content'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti labore quod, soluta ut ea 
              culpa doloremque corrupti explicabo eligendi aut omnis a! Inventore esse aliquam dignissimos 
              in et animi quae.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
      
    </section>
  )
}

export default About
