// import NavBar from "../components/NavBar"
// import VerticalNav from "../components/VerticalNav"
// import aniie from '../assets/aniie.jpg'

// import NavBar from "../components/NavBar"
import "../styles/Home.css"
// import React from 'react'
import AnimatedCursor from "../components/AnimatedCursor"
// import NavBar from "../components/NavBar"
import DisappearingNav from "../components/DisappearingNavBar"
// import Projects from "../components/Projects"
import SpecialProjects from "../components/SpecialProjects"


function Home() {

  return (
    <>
      <div className="homepage text-center">
        {/* <NavBar/> */}
        <DisappearingNav />
        <AnimatedCursor/>
        <div className=" justify-content-ctr mx-top-40 px-0 txt-center">
          <div>
            <div>this is box one</div>
          </div>
          <h1>My Expertise</h1>
          <SpecialProjects></SpecialProjects>
          {/* <Projects></Projects> */}
          <h1>My Experience</h1>

        </div>
      </div>
    </>
  )
}

export default Home
