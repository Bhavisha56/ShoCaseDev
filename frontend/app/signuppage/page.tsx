import React from 'react'
import Link from "next/link";

const signuppage = () => {
  
  return (
    <>
     <div className="h-screen w-screen bg-[url('/backmain.jpg')] bg-cover bg-center  flex justify-center items-center">
      <Link href="/"><button className='bg-lime-500 rounded-2xl p-4 font-black relative -top-80 -left-90'>Back to main</button></Link>
        <div className='registerbox bg-black text-white  rounded-2xl mr-8'>
          <div className='text-center text-3xl mt-3'>Welcome Developer</div>
            <form className='flex flex-col ml-50 mt-10'>
              <input className='bg-white w-56 text-black p-3 rounded-2xl m-3' required type="text" placeholder='name' />
              <input className='bg-white w-56 text-black p-3 rounded-2xl m-3' required type="email" placeholder='email' name="" id="" />
              <input className='bg-white w-56 text-black p-3 rounded-2xl m-3' required type="password" placeholder='Create Password' name="" id="" />
             {/* Role Selection */}
            <div className="flex flex-col m-3">
  <select className="bg-white w-56 text-black p-3 rounded-2xl" name="role">
    <option value="">Select your role</option>
    <option value="student">Student</option>
    <option value="professional">Professional</option>
    <option value="beginner">Beginner</option>
  </select>
             </div>            
           {/* OTP based email */}
             <div className="flex gap-6 items-center text-white">

  {/* Male */}
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name="gender"
      value="male"
      className="accent-lime-500"
    />
    <span>Male</span>
  </label>

  {/* Female */}
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name="gender"
      value="female"
      className="accent-pink-500"
    />
    <span>Female</span>
  </label>

             </div>
           <button className='text-black bg-lime-400 rounded-2xl p-2 font-bold font-black w-62 mt-5'>Submit</button>
     </form>
            <span className='text-white ml-50  text-center mt-4'>Already have an account ? <Link href="/loginpage"><button className='bg-lime-400 rounded-2xl mt-5 px-2 text-black font-bold'>login here</button></Link></span>
      </div>
    </div>
        </>
  )
}

export default signuppage