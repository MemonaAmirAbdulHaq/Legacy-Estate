import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
  
  <header className='bg-[#062f37] shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
    <span className='text-[#d3c397]'>Legacy </span>
    <span className='text-[#b2a47b]'>Estate</span>
    </h1>
    </Link>
    <form className='bg-[#b2a47b] p-3 rounded-lg flex items-center' >
      <input type='text' placeholder='Search...'
      className='bg-transparent focus:outline-none w-24 sm:w-64'/>
      <FaSearch className='text-teal-900'/>
    </form>
    <ul className='flex gap-4'>
     <Link to='/'> <li className='hidden sm:inline text-[#d3c397] hover:underline'>Home</li></Link>
    <Link to='/about'>  <li className='hidden sm:inline text-[#d3c397] hover:underline'>About</li></Link>
     <Link to='/signin'> <li className=' text-[#d3c397] hover:underline'>Sign in</li></Link>
    </ul>
    </div>
  </header>
  )
}

export default Header
