import React from 'react'
import Wave from '../../img/wave.png'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Gitub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt='' style={{ width: '100%' }} />
      <div className='f-content'>
        <span>MahmoudFathy2424@gmail.com</span>
        <div className='f-icons'>
          <a target='_blank' href='https://twitter.com'>
            <Twitter color='white' size={'3rem'} />
          </a>
          <a target='_blank' href='https://www.facebook.com'>
            <Facebook color='white' size={'3rem'} />
          </a>
          <a target='_blank' href='https://github.com/mahmoudfathy557'>
            <Gitub color='white' size={'3rem'} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
