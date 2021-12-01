import Head from "next/head";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

