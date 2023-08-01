import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import PHP from '../assets/PHP-logo.svg.png';
import CodeIgniter from '../assets/Codeigniter.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Sql from '../assets/mysql.png';
import Python from '../assets/Python-Symbol.png';
import Git from '../assets/git_logo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1b1b27] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-[30px] flex flex-col justify-center h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#8892b0]'>Experience</p>
                <p className='py-4'>// These are technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-2 text-center py-5'>
                <div className='shadow-md shadow-[#1e2127] hover:scale-110 duration-500'>
                    <img className='w-[30px] mt-5 sm:w-[60px] mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-2 text-[13px] md:text-base'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[30px] mt-5 sm:w-[60px] mx-auto' src={CSS} alt="CSS Icon" />
                    <p className='my-2 text-[13px] md:text-base'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[27px] mt-5 sm:w-[60px] mx-auto' src={JavaScript} alt="JS Icon" />
                    <p className='my-4 text-[13px] md:text-base'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[30px] mt-5 sm:w-[55px] mx-auto' src={ReactImg} alt="React Icon" />
                    <p className='my-4 text-[13px] md:text-base'>React</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[45px] mt-5 h-[46px] sm:w-[75px] sm:h-[75px] mx-auto' src={PHP} alt="PHP Icon" />
                    <p className='my-4 text-[13px] md:text-base'>PHP</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[54px] mt-5 h-[44px] sm:w-[80px] sm:h-[80px] mx-auto' src={Python} alt="Python Icon" />
                    <p className='my-4 text-[13px] md:text-base'>Python</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[45px] mt-6 sm:w-[60px] mx-auto' src={CodeIgniter} alt="CI Icon" />
                    <p className='my-4 text-[13px] md:text-base'>CodeIgniter</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[50px] mt-5 sm:w-[65px] mx-auto' src={Tailwind} alt="Tailwind Icon" />
                    <p className='my-4 text-[13px] md:text-base'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[100px] h-[60px] mt-5 sm:w-[130px] sm:h-[70px] mx-auto' src={Sql} alt="SQL Icon" />
                    <p className='my-2 text-[13px] md:text-base'>mySQL</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[35px] mt-5 sm:w-[55px] mx-auto' src={GitHub} alt="Github Icon" />
                    <p className='my-4 text-[13px] md:text-base'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#17181a] hover:scale-110 duration-500'>
                    <img className='w-[45px] mt-5 sm:w-[55px] mx-auto' src={Git} alt="Git Icon" />
                    <p className='my-4 text-[13px] md:text-base'>Git</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills