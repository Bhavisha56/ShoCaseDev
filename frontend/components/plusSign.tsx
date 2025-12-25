"use client"
import React from 'react'
import { useEffect, useRef } from "react"
import gsap from "gsap"


 
const plussign = () => {
     const plusRef = useRef(null)

  useEffect(() => {
    gsap.to(plusRef.current, {
      scale:1.1,
      duration: 1.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    })
  }, [])
  return (
     <>
     <div ref={plusRef} className='bg-lime-500  p-3 w-16 rounded-4xl h-16 relative  cursor-pointer hover:scale-105 duration-300'>
         <img className='bg-cover bg-no-repeat' src="/plus.png" alt="" />
     </div>
     </>
  )
}

export default plussign