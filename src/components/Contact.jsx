import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1b1b27] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/90a225c9-ef3d-4ade-9d43-2f01bd86776e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-[#8892b0] text-gray-300 mb-3'>Contact</p>
                <p className='text-gray-300 mt-5'>// Contact Me!!</p>
            </div>
            <input className='bg-[#ccd6f6] mt-3 p-2' type="text" placeholder='Name' name='name' />
            <input className='p-2 mt-3 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 mt-3' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#8892b0] hover:border-[#8892b0]px-5 py-2 my-8 mx-auto flex items-center mb-5'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact