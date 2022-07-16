import React from 'react'
import 'swiper/css'

import resort from '../../img/resort.png'
import menu from '../../img/menu.png'
import movie from '../../img/movie.png'
import tenzies from '../../img/tenzies.png'
import bud from '../../img/bud.png'

import { Swiper, SwiperSlide } from 'swiper/react'

const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <a
            href='https://beach-resort-react-2020.netlify.app/'
            target='_blank'
          >
            <img src={resort} alt='' />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href='https://go-to-the-kitchen.netlify.app/' target='_blank'>
            <img src={menu} alt='' />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href='https://netflix-elghalabaa.netlify.app/login'
            target='_blank'
          >
            <img src={movie} alt='' />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tenzies} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <a
            href=' https://react-todolist-project2020.netlify.app/'
            target='_blank'
          >
            <img src={bud} alt='' />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
