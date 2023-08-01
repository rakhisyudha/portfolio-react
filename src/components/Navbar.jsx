import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo1-removebg-preview.png";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1b1b27] text-gray-300">
        <div>
        <img src={Logo} alt="Logo Image" style={{width: '100px' }} />
        </div>
        {/* Menu */}
            <ul className="hidden md:flex">
                <li className="mx-4">Home</li>
                <li className="mx-4">About</li>
                <li className="mx-4">Skills</li>
                <li className="mx-4">Work</li>
                <li className="mx-4">Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1b1b27] flex flex-col justify-center items-center'}>
            <li className="my-6 text-4xl">Home</li>
            <li className="my-6 text-4xl">About</li>
            <li className="my-6 text-4xl">Skills</li>
            <li className="my-6 text-4xl">Work</li>
            <li className="my-6 text-4xl">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] px-4 duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300"
                    href="">
                        LinkedIn <FaLinkedin size={30}></FaLinkedin>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] px-4 duration-300 bg-gray-500">
                    <a className="flex justify-between items-center w-full text-gray-300"
                    href="">
                        Github <FaGithub size={30}></FaGithub>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] px-4 duration-300 bg-red-900">
                    <a className="flex justify-between items-center w-full text-gray-300"
                    href="">
                        Email <HiOutlineMail size={30}></HiOutlineMail>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] px-4 duration-300 bg-blue-800">
                    <a className="flex justify-between items-center w-full text-gray-300"
                    href="">
                        Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  