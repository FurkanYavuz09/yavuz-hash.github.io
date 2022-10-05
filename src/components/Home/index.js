import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-f.png'
import { Link } from 'react-router-dom'
import './index.scss'


const Home = () => {


  const [letterClass] = useState('text-animate')

  const nameArray = [ 'u', 'r', 'k', 'a', 'n']

  const jobArray = [
    'C',
    'o',
    'm',
    'p',
    'u',
    't',
    'e',
    'r',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    'i',
    'n',
    'g',
    ' ',
    's',
    't',
    'u',
    'd',
    'e',
    'n',
    't'
  ]

 


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H </span>
          <span className={`${letterClass} _12 `}>i !  </span>
          <br />
          <span className={`${letterClass} _13`}>I am</span>
          {/* <span className={`${letterClass} _14`}></span> */}
          <img src={LogoTitle} alt="Sofware Developer" />
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray}
          idx={22} />
          </h1>
          <h2> Interests: Machine Learning/Artificial Intelligence/Data Science </h2>
          <Link to="/contact" className='flat-button'> CONTACT ME</Link>
        </div>

      </div>

    
      </>
  )
}

export default Home;