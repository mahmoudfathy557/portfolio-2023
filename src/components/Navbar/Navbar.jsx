import React from 'react'
import Moon from '../../img/moon.png'
import Sun from '../../img/sun.png'
import { Link } from 'react-scroll'

const Navbar = ({ toggle, setToggle }) => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>Elshorbagy</div>
        <div className='toggle'>
          <img src={Moon} onClick={() => setToggle(!toggle)} alt='' />
          <img src={Sun} onClick={() => setToggle(!toggle)} alt='' />
        </div>
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: 'none' }}>
            <Link
              spy={true}
              to='Navbar'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to='Services'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to='Experience'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to='Portfolio'
              smooth={true}
              activeClass='activeClass'
            >
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
          <button className='button'>Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
