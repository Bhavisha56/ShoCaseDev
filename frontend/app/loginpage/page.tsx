'use client'
import React from 'react'
import Link from "next/link";
const loginpage = () => {
  return (
    <>
    <div className="h-screen w-screen bg-[url('/backmain.jpg')] bg-cover bg-center  flex justify-center items-center">
      <Link href="/"><button className='bg-lime-500 rounded-2xl p-4 font-black relative -top-80 -left-100'>Back to main</button></Link>
        <div className='loginbox bg-black  rounded-2xl mr-40'>
            <h1 className='text-white text-3xl font-bold text-center pt-10'>Welcome Developer</h1>
            <form >
            <div className='flex flex-col p-10'>
            <input className='bg-white m-5 p-4 rounded-2xl' required type="email" placeholder='Enter your email' name="" id="" />
            <input className='bg-white m-5 p-4 rounded-2xl' required type="password" placeholder='Password' name="" id="" />
           <button className='bg-lime-400 rounded-2xl p-2 font-bold font-black w-62 ml-13'>Submit</button>
           <span className='text-white text-center mt-2'>Don't have an account ? <Link href="/signuppage"><button className='bg-lime-400 rounded-2xl mt-2 px-2 text-black font-bold'>SignUp</button></Link></span>
            </div>
           </form>
        </div>
</div>
        </>
  )
}

export default loginpage