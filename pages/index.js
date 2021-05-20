import Head from 'next/head'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Yumi'sPorftolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      </div>
  )
}
