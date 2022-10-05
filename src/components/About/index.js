import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'


const Contact = () => {


  const [letterClass] = useState('text-animate')

  const nameArray = [ 'A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

  




  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}></span>
          <span className={`${letterClass} _12 `}> </span>
          <br />
          <span className={`${letterClass} _13`}></span>
          <span className={`${letterClass} _14`}></span>
        
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15} />
          <br />
          
          </h1>
          <h2> I am a senior year computer engineering student at IZTECH .I enjoy solving difficult problems and making hard things looks simple . </h2>
        
        </div>

      </div>

    
      </>
  )
}

export default Contact;