import React from "react"
import Navbar from "@/components/navbar"

const page = () => {
  return (
    <div className="min-h-screen bg-[url('/backmain.jpg')] bg-cover bg-center bg-no-repeat">
      <Navbar />

<form >
      <div className="rounded-4xl max-w-6xl mx-auto mt-14 grid grid-cols-2 gap-12  backdrop-blur-xl p-10 rounded-3xl">
        {/* LEFT – Preview Upload */}
        <div className="border-2 border-dashed bg-black border-white/20 rounded-2xl flex flex-col items-center justify-center h-[420px] cursor-pointer hover:border-white/50 transition">
          <div className="text-5xl mb-4">📁</div>
          <p className="text-white font-medium">Upload Project Preview</p>
          <p className="text-gray-400 text-sm mt-2">
            Image / Video / GIF (recommended)
          </p>
        </div>

        {/* RIGHT – Project Details */}
        <div className="space-y-5 text-white">
          <h1 className="text-2xl font-semibold text-black">Upload Your Project</h1>

          <input
            type="text"
            placeholder="Project Title"
            className="w-full bg-black px-4 py-3 rounded-xl outline-none"
          />

          <textarea
            rows="4"
            placeholder="Describe your project..."
            className="w-full bg-black px-4 py-3 rounded-xl outline-none resize-none"
          />

          <input
            type="text"
            placeholder="Tech Stack (React, Tailwind, Node)"
            className="w-full bg-black px-4 py-3 rounded-xl outline-none"
          />

          <input
            type="url"
            placeholder="Live Project URL"
            className="w-full bg-black px-4 py-3 rounded-xl outline-none"
          />

          <input
            type="url"
            placeholder="GitHub Repository URL"
            className="w-full bg-black px-4 py-3 rounded-xl outline-none"
          />
        </div>
      </div>

      {/* Publish Button */}
      <div className="fixed bottom-6 right-6 ">
        <button className="bg-white  text-black  p-4 rounded-full font-semibold shadow-xl hover:scale-105 transition">
          Publish Project 🚀
        </button>
      </div>
        </form>
    </div>
  )
}

export default page
