'use client'
import React from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function VerificationPage() {
  return (
    <>
      <div className="h-screen w-screen bg-[url('/backmain.jpg')] bg-cover bg-center  flex justify-center items-center">
       <form className='bg-black h-56 p-6 rounded-4xl'>
       <h1 className='text-white text-center text-3xl m-3'>OTP Verification</h1>
       <InputOTP maxLength={6}>
  <InputOTPGroup className="gap-3">
    {[0,1,2].map(i => (
      <InputOTPSlot
        key={i}
        index={i}
        className="w-14 h-14 text-2xl bg-black text-lime-400 
                   border-2 border-lime-500 rounded-xl 
                   focus:border-white focus:scale-110 transition-all"
      />
    ))}
  </InputOTPGroup>

  <InputOTPSeparator className="text-white text-3xl px-2" />

  <InputOTPGroup className="gap-3">
    {[3,4,5].map(i => (
      <InputOTPSlot
        key={i}
        index={i}
        className="w-14 h-14 text-2xl bg-black text-lime-400 
                   border-2 border-lime-500 rounded-xl 
                   focus:border-white focus:scale-110 transition-all"
      />
    ))}
  </InputOTPGroup>
</InputOTP>
           <button className='text-black bg-lime-400 rounded-2xl p-2 font-bold font-black w-62 ml-28 mt-5'>Verify</button>
       </form>
      </div>
    </>
  )
}