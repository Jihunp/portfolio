import "../styles/Home.css"
// import React from 'react'
import AnimatedCursor from "../components/AnimatedCursor"
import DisappearingNav from "../components/DisappearingNavBar"
import SpecialProjects from "../components/SpecialProjects"
import Profile from "../components/Profile"

function Home() {

  return (
    <>
      <div className="homepage text-center">
        {/* <NavBar/> */}
        <DisappearingNav />
        <AnimatedCursor/>
        <Profile/>
        <div>
          A little about me
        </div>
        <div className=" justify-content-ctr px-0 txt-center">
        <SpecialProjects></SpecialProjects>
        {/* <Projects></Projects> */}
        <h1>My Experience</h1>

        </div>
      </div>
    </>
  )
}

export default Home
