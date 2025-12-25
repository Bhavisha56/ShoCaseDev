import React from 'react'

const mainbox = () => {
  return (
    <>
    <div className='bg-black m-10 w-72 h-72 rounded-2xl hover:scale-105  duration-300 cursor-pointer'>
          <div>
            <img src="/zomato.jpg" alt="Project Image" className="w-full h-40 rounded-t-2xl"/>
          </div>
          <div className='p-5'>
            <h2 className='text-white text-xl font-bold mb-2'>Project Title</h2>
            <p className='text-gray-300 text-sm'>This is a brief description of the project. It gives an overview of what the project is about.</p>
          </div>
      </div>
    </>
  )
}

export default mainbox