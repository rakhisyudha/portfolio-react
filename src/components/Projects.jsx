import React from 'react';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';
import Project4 from '../assets/project4.png';
import Project5 from '../assets/converter.png';

const Projects = () => {
  return (
    <div name='projects' className='bg-[#1b1b27] w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl mx-5 sm:ml-4 font-bold inline border-b-4 text'>Projects</p>
          <p className='pt-6 px-5'>// Checkout some of my projects</p>
        </div>

        <div className='grid mt-4 w-full m-auto sm:grid-cols-2 md:grid-cols-3 gap-4 text-center'>
          <article className='relative group rounded-lg  overflow-hidden items-end'>
            <img className='rounded-2xl' src={Project1} alt="Design Web" />
            <div className='content-div group-hover:bottom-0 '>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>Web Design</span>
                <div className='mb-1'>
                  <span className='text-md text-gray-300'>Cafe</span>
                  <div>
                  <a href="https://rakhis-pakis.netlify.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#8892b0] text-gray-700 font-bold text-sm
                    '>Demo</button>
                  </a>
                  <a href="https://github.com/rakhisyudha/PakisHillss">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#8892b0] text-gray-700 font-bold text-sm'>Code</button>
                  </a>
                  </div>
                </div>
            </div>
          </article>
          <article className='relative group rounded-lg  overflow-hidden items-end'>
            <img className='rounded-2xl' src={Project2} alt="Design Web" />
            <div className='content-div group-hover:bottom-0 '>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>Web Design</span>
                <div className='mb-1'>
                  <span className='text-md text-gray-300'>Outbound</span>
                  <div>
                  <a href="https://rakhis-outbound.netlify.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#8892b0] text-gray-700 font-bold text-sm
                    '>Demo</button>
                  </a>
                  <a href="https://github.com/rakhisyudha/OutboundDesign">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#8892b0] text-gray-700 font-bold text-sm'>Code</button>
                  </a>
                  </div>
                </div>
            </div>
          </article>
          <article className='relative group rounded-lg  overflow-hidden items-end'>
            <img className='rounded-2xl' src={Project3} alt="Design Web" />
            <div className='content-div group-hover:bottom-0 '>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>Web</span>
                <div className='mb-1'>
                  <span className='text-md text-gray-300'>Auction</span>
                  <div>
                  <a href="">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#8892b0] text-gray-700 font-bold text-sm'>Code</button>
                  </a>
                  </div>
                </div>
            </div>
          </article>
          <article className='relative group rounded-lg  overflow-hidden items-end'>
            <img className='rounded-2xl' src={Project4} alt="Design Web" />
            <div className='content-div group-hover:bottom-0 '>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>Web Design</span>
                <div className='mb-1'>
                  <span className='text-md text-gray-300'>Portfolio</span>
                  <div>
                  <a href="https://rakhisdeyudha.netlify.app/" class="">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#8892b0] text-gray-700 font-bold text-sm
                    '>Demo</button>
                  </a>
                  </div>
                </div>
            </div>
          </article>
          <article className='relative group rounded-lg  overflow-hidden items-end'>
            <img className='rounded-2xl' src={Project5} alt="Design Web" />
            <div className='content-div group-hover:bottom-0 '>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>Web</span>
                <div className='mb-1'>
                  <span className='text-md text-gray-300'>Currency Converter</span>
                  <div>
                  <a href="https://currcov.netlify.app/" class="">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#8892b0] text-gray-700 font-bold text-sm
                    '>Demo</button>
                  </a>
                  <a href="https://github.com/rakhisyudha/Converter_Currency">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#8892b0] text-gray-700 font-bold text-sm'>Code</button>
                  </a>
                  </div>
                </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Projects