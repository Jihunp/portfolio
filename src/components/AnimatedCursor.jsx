import React, { useEffect, useState } from 'react'
import "../styles/AnimatedCursor.css"
import gsap from 'gsap'

function AnimatedCursor () {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0})
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

  return (
    <div className='shapes'>
      <div className='shape shape-1'></div>
      <div className='shape shape-2'></div>
      <div className='shape shape-3'></div>
      <div className='content'>
        <h1 className='animated-word'>Edward Park</h1>
      </div>
      <div className='cursor'></div>
    </div>
  )
}

export default AnimatedCursor