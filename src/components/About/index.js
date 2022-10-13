import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'



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
          
          <span className={`${letterClass} _13`}></span>
          <span className={`${letterClass} _14`}></span>
        
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15} />
        
          </h1>
          <h2> I am a senior year computer engineering student at IZTECH .I enjoy solving difficult problems and making hard things looks simple 
            .I love debugging code and learning new things everyday.<br/><br/> I'm a confident, naturally curious, and quite well with algorithms.
            <br/><br/> I love C by the way</h2>
        
        </div>

      </div>
          
    
      </>
  )
}

export default Contact;