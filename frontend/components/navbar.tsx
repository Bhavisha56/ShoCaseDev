import React from 'react'
import Link from "next/link";

const navbar = () => {
  return (
    <div className='w-full h-20 px-60 flex justify-between items-center '>
       <div>
         <h1 className='text-4xl font-bold'>LogoImg</h1>
       </div>
       <div className='flex'>
       <Link href="/loginpage"><button className='bg-lime-500 cursor-pointer font-bold font-mono rounded-4xl transition-transform  px-7 py-3'>Login</button></Link> 
       </div>
    </div>
  )
}

export default navbar