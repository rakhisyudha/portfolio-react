import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1b1b27]'>

        {/* Container */}
         <div className='max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full'>
            <p className='text-white py-1 mt-6'>Hi, My Name is</p>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-300'>Rakhis de Yudha</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Software Engineer.</h2>
            <p className='text-gray-300 py-4 max-w-[700px]'>Fully equipped to handle end-to-end web application development, delivering high-quality solutions that meet modern web development standards. My ability to adapt and stay updated with the latest technologies makes me a valuable asset in the constantly evolving landscape of full-stack development.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center gap-3 hover:bg-[#8892b0] hover:text-gray-800'>View Work <span className='group-hover:rotate-90 duration-500'><HiArrowNarrowRight></HiArrowNarrowRight></span></button>
            </div>
         </div>
    </div>
  )
}

export default Home