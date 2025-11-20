import React, { useState } from 'react'
import logo from '../../assets/site-logo.png'
import SearchBar from '../SearchBar/SearchBar'


function Navbar() {

  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div>
      <nav className='bg-neutral-700 shadow-md  w-full flex justify-between items-center'>
        <div>
          <img className="w-18 h-18 border-2 border-violet-600 rounded-full m-1 shadow-2xl bg-black shadow-violet-600" src={logo} alt='site-logo' />
        </div>

        <div className='px-8 py-4'>
          <p onClick={() => setOpenSearch(prev => !prev)}
            className='cursor-pointer font-bold text-white'>🔍︎ Search</p>
        </div>
      </nav>

      <div className={`flex justify-center pt-2 px-4 pb-0 overflow-hidden transition-all duration-800 
                ${openSearch ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}><SearchBar /></div>
    </div>
  )
}

export default Navbar
