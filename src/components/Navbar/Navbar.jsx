import React, { useState } from 'react'
import logo from '../../assets/site-logo.png'
import SearchBar from '../SearchBar/SearchBar'


function Navbar({ setSearchTerm, setType}) {

  const [openSearch, setOpenSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <nav className='bg-neutral-700 shadow-md  w-full flex justify-between items-center'>
        <div className='px-1 sm:px-4'>
          <img className="w-12 h-12 md:w-18 md:h-18 border-2 border-violet-600 rounded-full m-1 shadow-2xl bg-black shadow-violet-600" src={logo} alt='site-logo' />
        </div>

        <div className='flex justify-center items-center md:px-8 cursor-pointer text-white font-medium'>
          <div className=' px-4 sm:px-8 sm:py-4'>
            <p onClick={() => setOpenSearch(prev => !prev)}
              className='cursor-pointer font-medium text-white'>🔍︎ Search</p>
          </div>

          <div className=' px-1 hidden md:block'>
            <p>Login In | Sign Up ⏻</p>
          </div>


          <div className='p-4 md:p-0'>
            <button className="md:hidden cursor-pointer"
              onClick={() => setMenu(prev => !prev)}>☰</button>
          </div>
        </div>
      </nav>

      <div className={` flex justify-start overflow-hidden transition-all duration-800 
       ${menu ? 'max-h-20 opacity-100' : `max-h-0 opacity-0`}`}>
        <div className=' p-2 cursor-pointer font-medium text-white'>
          <p>Login In | Sign Up ⏻</p>
        </div>
      </div>

      <div className={`flex justify-center pt-2 px-4 pb-0 overflow-hidden transition-all duration-800 
                ${openSearch ? ' max-h-40 md:max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}><SearchBar setSearchTerm={setSearchTerm} setType={setType} /></div>
    </div>
  )
}

export default Navbar;
