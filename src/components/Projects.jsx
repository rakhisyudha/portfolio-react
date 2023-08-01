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
          <p className='text-4xl mx-5 sm:ml-4 font-bold inline border-b-4 border-[#8892b0] text-gray-300'>Projects</p>
          <p className='pt-6 px-5'>// Checkout some of my projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 p-4 gap-4'>
          <div style={{backgroundImage: `url(${Project1})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 py-9'>
              <span className='text-2xl font-bold text-white tracking-wider'>Web Design</span>
              <div className='pt-8 text-center'>
                <a href="https://rakhis-pakis.netlify.app/">
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/rakhisyudha/PakisHillss">
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Project2})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 py-9'>
              <span className='text-2xl font-bold text-white tracking-wider'>Web Design</span>
              <div className='pt-8 text-center'>
                <a href="https://rakhis-outbound.netlify.app/">
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/rakhisyudha/OutboundDesign">
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Project3})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 py-9'>
              <span className='text-2xl font-bold text-white tracking-wider'>Web Auction</span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/rakhisyudha/WebLelang">
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Project4})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 py-9'>
              <span className='text-2xl font-bold text-white tracking-wider'>Web Portfolio</span>
              <div className='pt-8 text-center'>
                <a href="https://rakhisdeyudha.netlify.app/">
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Project5})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 py-9'>
              <span className='text-2xl font-bold text-white tracking-wider'>Currency Converter</span>
              <div className='pt-8 text-center'>
                <a href="https://currcov.netlify.app/">
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/rakhisyudha/Converter_Currency">
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects