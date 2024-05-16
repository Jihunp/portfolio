// import NavBar from "../components/NavBar"
// import VerticalNav from "../components/VerticalNav"
// import aniie from '../assets/aniie.jpg'

// import NavBar from "../components/NavBar"
import "../styles/Home.css"
import React from 'react'
import AnimatedCursor from "../components/AnimatedCursor"
import NavBar from "../components/NavBar"
import Projects from "../components/Projects"


function Home() {

  return (
    <>
      <div className="homepage text-center">
        <NavBar/>
        <AnimatedCursor/>
        <div className=" justify-content-ctr mx-top-40 px-0 txt-center">
          <h1>My Expertise</h1>
          <h1 className="f-size-10 mx-bot-40 c-highlight">My Projects</h1>
          <Projects></Projects>
          <h1>My Experience</h1>

          <h1>The Ed Talk</h1>
          <h1 className="txt-center mx-0 px-0 test">Edward J. Park</h1>
          <h4 className="txt-center mx-0 px-0 ">Software Deveoper, Front End & Full Stack</h4>
        </div>
      </div>
    </>
  )
}

export default Home
