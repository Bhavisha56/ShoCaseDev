import React from 'react'
import Link from 'next/link'
const maincenter = () => {
  return (
    <div className='text-center p-15'>
    <h1 className='text-7xl m-5 font-black'>Showcase Your Live Projects</h1>
    <span className='text-4xl p-5 text-gray-600'>Get Instant Feedback</span>
    <div className='pt-5'>
  <Link href="/mainpage"><button className='cursor-pointer bg-lime-500 rounded-2xl text-xl px-2  py-2 font-mono font-extrabold'>Get Started</button></Link> 
    </div>
    </div>
  )
}

export default maincenter