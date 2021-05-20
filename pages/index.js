
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


export default function Home() {
  return (
    <div>

      <div className="nav-intro-section">
        <Navbar/>
        <Navbar_rev />
        <Intro/>
      </div>
      <About/>
 
      <Portfolio/>
      <Contact/>
      </div>
  )
}
