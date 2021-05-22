import Head from 'next/head'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'


export default function Home() {
  return (
     <div>
      
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      </div> 
  )

    
    
}
