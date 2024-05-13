// import NavBar from "../components/NavBar"
// import VerticalNav from "../components/VerticalNav"
// import aniie from '../assets/aniie.jpg'

// import NavBar from "../components/NavBar"
import "../styles/Home.css"
import React from 'react'
import AnimatedCursor from "../components/AnimatedCursor"


function Home() {

  return (
    <>
      <div className="homepage text-center">
        <AnimatedCursor/>
      {/* <NavBar/> */}
        <div className=" justify-content-ctr mx-top-40 px-0 txt-center">
          <h1 className="txt-center mx-0 px-0 test">Edward J. Park</h1>
          <h4 className="txt-center mx-0 px-0 ">Software Deveoper, Front End & Full Stack</h4>
        </div>
      </div>
    </>
  )
}

export default Home
