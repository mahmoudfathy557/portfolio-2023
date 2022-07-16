import React from 'react'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { motion } from 'framer-motion'
import Resume from './resume.pdf'

const Services = () => {
  const transition = {
    duration: 1,
    type: 'spring',
  }
  return (
    <div className='services' id='Services'>
      {/* left side */}
      <div className='awesome'>
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Web Development
          <br />
          Mobile Development
          <br />
          Graphic Design
        </span>
        <div>
          <a
            href={Resume}
            download
            // style={{ padding: 0, margin: 0, width: '20%' }}
          >
            <button className='button s-button'>Download CV</button>
          </a>
        </div>
        <div className='blur s-blur1' style={{ background: '#abf1ff94' }}></div>
      </div>
      {/* right side */}
      <div className='cards'>
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
        >
          <Card
            className='service-card'
            emoji={HeartEmoji}
            heading='Design '
            detail={'Bootstrap, Figma, Photoshop, Adobe'}
          />
        </motion.div>

        <motion.div
          initial={{ left: '-11rem', top: '12rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
        >
          <Card
            className='service-card'
            emoji={Glasses}
            heading='Developer '
            detail={'HTML, CSS, JavaScript, React,Mysql '}
          />
        </motion.div>
        <motion.div
          initial={{ top: '19rem', left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
        >
          <Card
            className='service-card'
            emoji={Humble}
            heading='UI/UX'
            detail={'lorem ipsum is dummy text set of words needed'}
          />
        </motion.div>
        <div
          className='blur s-blur2'
          style={{ background: 'var(--purple' }}
        ></div>
      </div>
    </div>
  )
}

export default Services
