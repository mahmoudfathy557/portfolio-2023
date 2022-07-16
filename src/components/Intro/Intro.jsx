import React from 'react'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import profile from '../../img/3d.png'
import glassesimoji from '../../img/glassesimoji.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Facebook from '../../img/Facebook.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Intro = () => {
  const transition = { duration: 2, type: 'spring' }

  return (
    <div className='intro' id='Intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span>Hey! I am</span>
          <span>Mahmoud Fathy</span>
          <span>
            <b>Software Developer</b>&nbsp; with over <b>2</b> years of hands-on
            experience in web designing and development and producing the
            quality work.
          </span>
        </div>
        <Link to='Contact' smooth={true} spy={true}>
          <button className='button i-button'>Get in touch</button>
        </Link>
        <div className='i-icons'>
          <a target='_blank' href='https://github.com/mahmoudfathy557'>
            <img src={Github} alt='Github' />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/mahmoud-fathy557'
          >
            <img src={LinkedIn} alt='LinkedIn' />
          </a>
          <a target='_blank' href='https://www.facebook.com'>
            <img src={Facebook} alt='Facebook' />
          </a>
        </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={profile} className='mine' alt='' />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=''
        />
        <motion.div
          style={{ top: '-4%', left: '74%' }}
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className='floating-div'
        >
          <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
        </motion.div>
        {/*  */}
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className='floating-div'
        >
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
        </motion.div>
        {/* blur divs */}
        <div className='blur' style={{ background: 'rgb(238 210 255' }}></div>
        <div
          className='blur'
          style={{
            background: '#c1f5ff',
            top: '21rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
