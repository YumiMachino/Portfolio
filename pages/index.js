
import Head from 'next/head'
import Image from 'next/image'
// import { Router } from 'react-router'
import About from '../components/About'
import Contact from '../components/Contact'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>

      <div className="nav-intro-section">
        <Navbar/>
        <Intro/>
      </div>
      <About/>
 
      <Portfolio/>
      <div className="temp">
        <Contact/>
      </div>
     
     

      </div>
  )
}
