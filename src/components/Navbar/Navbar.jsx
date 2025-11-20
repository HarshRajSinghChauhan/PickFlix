import React from 'react'
import logo from '../../assets/site-logo.png'
function Navbar() {
  return (
    <div>
      <nav className='bg-neutral-900 shadow-md border-neutral-500 border-2 w-full flex justify-start'>
        <img className="w-[80px] h-[80px]  " src={logo} alt='site-logo'/>
      </nav>
    </div>
  )
}

export default Navbar
