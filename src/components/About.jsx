import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1b1b27] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-6 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#8892b0]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p className='ml-4'>Hi, I'm de Yudha, nice to meet you.</p>
                </div>
                <div>
                    <p className='ml-4'>As a full-stack developer, I have expertise in both front-end and back-end technologies. I specialize in creating user-friendly and interactive interfaces using HTML, CSS, and JavaScript. On the server-side, I am skilled in languages like Python, PHP, , and I can work with databases like MySQL to build robust and efficient back-end solutions.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;