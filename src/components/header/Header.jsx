import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/me.png'
import Headersocials from './Headersocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Manvi Tiwari</h1>
        <h5 className='text-light'>Fullstack developer</h5>
        <Cta/>
        <Headersocials/>
        <div className="me">
          <img src={ME} alt='me'></img>
        </div>

        <a href="#contact" className='scroll__dowm'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
