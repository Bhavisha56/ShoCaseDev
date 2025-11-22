'use client'
import Navbar from "../components/navbar"
import React from 'react'
import Footer from "../components/footer"
import Mainbox from "../components/maincenter"
const Page = () => {
  return (
    <div className="h-screen w-screen bg-[url('/backmain.jpg')] bg-cover bg-center">
      <div>
      <Navbar/>
      </div>
      <div className="h-96 mt-30">
        <Mainbox/>
      </div>
      <div className="bg-black text-white mt-25 h-12">
        <Footer/>
      </div>
    </div>

  )
}

export default Page
