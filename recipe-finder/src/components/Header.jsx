import React from "react";
import { useState } from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [open , setOpen] = useState(false);
    console.log(open);
    
    return(
     <>
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gray-800 transition-all">

    {/* Logo */}
    <h1 className="text-xl md:text-3xl font-extrabold text-white" style={{ fontFamily: '"Exile", system-ui' }}>MEAL FINDER</h1>

    {/* Desktop Menu */}
    <ul className="text-white md:flex hidden items-center gap-6">
      <li>
        <NavLink
          to="/"
          className={({isActive}) => `transition font-medium text-gray-400 ${isActive ? 'text-gray-500 border rounded-full py-2 px-5' : 'text-white'} `}
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Home
        </NavLink>
      </li>    
      <li>
        <NavLink
          to="/categories"
          className={({isActive}) => `transition font-medium text-gray-400 ${isActive ? 'text-gray-500 border rounded-full py-2 px-5' : 'text-white'}` }
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Category
        </NavLink>
      </li>   
      <li>
        <NavLink
          to="/about-us"
          className={({isActive}) => `transition font-medium text-gray-400 ${isActive ? 'text-gray-500 border rounded-full py-2 px-5' : 'text-white'}` }
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          About
        </NavLink>
      </li>   
      <li>
        <NavLink
          to="/contact-us"
          className={({isActive}) => `transition font-medium text-gray-400 ${isActive ? 'text-gray-500 border rounded-full py-2 px-5' : 'text-white'}` }
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Contact
        </NavLink>
      </li>   
    </ul> 
<button
  type="button"
  className="hidden md:block w-40 py-3 px-4 text-sm font-medium text-white bg-gradient-to-r from-slate-700 to-slate-900 rounded-full shadow hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 hover:cursor-pointer"
>
  Login
</button>

  {
    open ? <img src="close.png" alt="" className="md:hidden" onClick={() => setOpen(prev => !prev)} /> : 
    <img src="humburger.png" alt="" className="md:hidden" onClick={() => setOpen(prev => !prev)} />
  }
</nav>
{/* Mobile menu */}
   { open && 
   <ul className="transition duration-150	 ease-in flex py-5 shadow-2xl justify-center flex-col items-center gap-6 md:hidden">
      <li>
        <NavLink
          to="/"
          className={({isActive}) => `transition font-medium text-black ${isActive ? 'text-black border rounded-full py-2 px-5' : ''} `}
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Home
        </NavLink>
      </li>    
      <li>
        <NavLink
          to="/categories"
          className={({isActive}) => `transition font-medium text-black ${isActive ? 'text-black border rounded-full py-2 px-5' : ''}` }
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Category
        </NavLink>
      </li>   
      <li>
        <NavLink
          to="/about-us"
          className={({isActive}) => `transition font-medium text-black ${isActive ? 'text-black border rounded-full py-2 px-5' : ''}` }
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          About
        </NavLink>
      </li>   
      <li>
        <NavLink
          to="/contact-us"
          className={({isActive}) => `transition font-medium text-black ${isActive ? 'text-black border rounded-full py-2 px-5' : ''}` }
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Contact
        </NavLink>
      </li>   
    </ul>
  }

</>

    )
}
export default Header