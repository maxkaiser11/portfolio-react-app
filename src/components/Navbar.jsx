import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from '../assets/mk-high-resolution-logo-color-on-transparent-background (1).png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo image" style={{width: '50px'}} />
      </div>

      {/* menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to="home" smooth={true} duration={500}>
            Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
            About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
            Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
            Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
            Contact
            </Link>
          </li>
        </ul>

      {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
            About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
            Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
            Work
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
            Contact
            </Link>
          </li>
        </ul>

      {/* Social items */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/maximilian-kaiser-02a555182/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/maxkaiser11">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://docsend.com/view/yde6q7kmxqzhkv4k">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

      </div>


    </div>
  )
}

export default Navbar
