import React from 'react'
import Navbar from "@/components/navbar"
import Mainbox from "@/components/mainbox"
import PlusSign from "@/components/plusSign"
const page = () => {
  return (
    <div className="absolute w-full min-h-full bg-[url('/backmain.jpg')] bg-cover bg-center bg-no-repeat">
      
      <Navbar />

      {/* Search */}
      <div className="flex justify-center mt-3">
        <input
          type="search"
          placeholder="Search the project"
          className="text-white px-5 bg-black w-96 h-10 rounded-2xl"
        />
      </div>

      {/* Grid */}
      <div className="p-10 mt-10 ml-20 grid grid-cols-3 gap-6">
        <Mainbox />
        <Mainbox />
        <Mainbox />
        <Mainbox />
        <Mainbox />
        <Mainbox />
        <Mainbox />
        <Mainbox />
        <Mainbox />
        <Mainbox />
        <Mainbox />
        <Mainbox />
      </div>
      <div className="fixed bottom-6 left-11/12 z-50">
       <PlusSign/>
      </div>

    </div>
  )
}

export default page
