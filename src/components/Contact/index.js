import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'


const Contact = () => {


  const [letterClass, ] = useState('text-animate')
  const form = useRef()

  

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('contact_service', 'contact_form', form.current, 'NCpdmKO8vluFIcByF')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(true)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
 


  return (
    <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1 >
          
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <h2 >
          I am interested in internship/part-time opportunities for now because of my studies. You can reach me via below form.
        </h2>
        <div className="contact-form" >
          <form ref={form} onSubmit={sendEmail}>
            <ul style={{listStyleType:'none'}}>
              <li className="half">
                <input placeholder="Name" type="text" name="user_name" required />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="user_email"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input  type="submit" className="flat-button" id="submit-button" value="SUBMIT" />
              </li>
            </ul>
          </form>
        </div>

      </div>
      
     
    </div>
    
  </>
  )
}

export default Contact;