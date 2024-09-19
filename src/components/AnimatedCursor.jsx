import React, { useEffect, useState } from 'react'
import "../styles/AnimatedCursor.css"
import "../App.css"
import gsap from 'gsap'

function AnimatedCursor () {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0})
  const [isAnimatedWord, setAnimatedWord] = useState(false);
  useEffect(() => {
    const handleMouse = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      setMousePos({ x: mouseX, y: mouseY });

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      });

      gsap.set(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      });
    }
    document.body.addEventListener("mousemove", handleMouse);
  }, [])

  const handleMouseEnter = () => {
    setAnimatedWord(true);
  };

  const handleMouseLeave = () => {
    setAnimatedWord(false);
  };

  return (
    <div>
      <div className='shapes'>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
        <div className='shape shape-3'></div>
        <div className='content'>
          <h1 className='animated-word' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Edward Park</h1>
          <h4 className='animated-word-subtitle' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Software Deveoper, Front End & Full Stack</h4>
        </div>
        {isAnimatedWord ? <div className='cursor cursor-word'></div> : null}
      </div>
        <h1>The Ed Talk</h1>
      <div>Passionate about connecting people and writing functional code</div>
    </div>
  )
}

export default AnimatedCursor