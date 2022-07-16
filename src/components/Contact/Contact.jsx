import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [alert, setAlert] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_lakmbpn',
        'template_pa5ko6h',
        form.current,
        'J-oXp_-3HtL3Hz-HS'
      )
      .then(
        (result) => {
          console.log(result)
          setAlert(true)
        },

        (error) => {
          console.log(error.text)
        }
      )
    const timeOut = setTimeout(() => {
      setAlert(true)
    }, 3000)

    clearTimeout(timeOut)
  }

  return (
    <div className='contact-form' id='Contact'>
      {/* left side copy and paste from work section */}
      <div className='w-left'>
        <div className='awesome'>
          {/* darkMode */}
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className='blur s-blur1'
            style={{ background: '#ABF1FF94' }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='user_name'
            className='user'
            placeholder='Name'
          />
          <input
            type='email'
            name='user_email'
            className='user'
            placeholder='Email'
          />
          <textarea name='message' className='user' placeholder='Message' />
          <input type='submit' value='Send' className='button' />
          {/* {done ? (
            <span className='email_sent'>Email has been sent,thanks.</span>
          ): setTimeout(()=>{}, 2000) } */}

          {alert && <span>Email has been sent,thanks.</span>}
          <div
            className='blur c-blur1'
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
