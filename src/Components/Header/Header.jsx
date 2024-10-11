import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../assets/pb-webcraft-logo.png'
function Header() {
  return (
    <nav className='w-full flex items-center justify-between px-3 border bottom-1 border-gray-300 '>
    <div>
      <img src={Logo} className='h-[100px] '/>
    </div>
    <ul className='md:flex md:space-x-9 hidden font-semibold text-gray-900'>
      <li className='cursor-pointer hover:text-[#9e3ffd] '><Link to="/home">Home </Link></li> 
      <li className='cursor-pointer hover:text-[#9e3ffd] '><Link to="#">Services</Link> </li>
      <li className='cursor-pointer hover:text-[#9e3ffd] '>About</li>
      <li className='cursor-pointer hover:text-[#9e3ffd] '>Clients</li>
      <li className='cursor-pointer hover:text-[#9e3ffd] '>Contact</li>
      <li className='cursor-pointer hover:text-[#9e3ffd] '><Link to="/planpricing">Plans & Pricing</Link></li>
      <li className='cursor-pointer hover:text-[#9e3ffd] '>Portfolio</li>
      <li className='cursor-pointer hover:text-[#9e3ffd] '>More</li>
    </ul>
    <div className='md:flex space-x-2 hidden '>
      <div className='text-[#9e3ffd] py-3 px-4'><Link to="/form">Log In</Link></div>
      <div className='bg-[#9e3ffd] rounded-full px-6 py-3 text-white'>Call Now</div>
    </div>
    <div className='md:hidden '>
      <a href='#' className='text-5xl text-[#9e3ffd] cursor-pointer '> &#8801; </a>
    </div>
  </nav>
  
  )
}

export default Header