
import Head from 'next/head'
import Image from 'next/image'
// import { Router } from 'react-router'
import About from '../components/About'
import Navbar_rev from '../components/Navbar_rev'
import Contact from '../components/Contact'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import styles from '../styles/Home.module.css'
import Intro_rev from '../components/Intro_rev'
import About_rev from '../components/About_rev'
import Portfolio_rev from '../components/Portfolio_rev'


export default function Home() {
  return (
    <div>

      {/* <div className="nav-intro-section"> */}
        {/* <Navbar/> */}
      <Navbar_rev />
        {/* <Intro/> */}  
      <Intro_rev />
      {/* </div> */}
      <About_rev />
      {/* <About/> */}
      <Portfolio_rev />
      <Portfolio/>
      <Contact/>
      </div>
  )
}
