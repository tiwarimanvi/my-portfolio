import React from 'react'
import CV from '../../assets/cv.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>download cv</a>
        <a href='#contact' className='btn btn-primary'>let's talk</a>
      
    </div>
  )
}

export default Cta
