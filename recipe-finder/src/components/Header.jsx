import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
     <>
<nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gray-800 transition-all">

    {/* Logo */}
    <h1 className="text-3xl font-extrabold text-white" style={{ fontFamily: '"Exile", system-ui' }}>MEAL FINDER</h1>

    {/* Desktop Menu */}
    <ul className="text-white md:flex hidden items-center gap-6">
<li>
  <NavLink
    to="/"
    className={({isActive}) => `transition font-medium hover:text-white/70 ${isActive ? 'text-gray-500 border rounded-full py-2 px-5' : 'text-white'} `}
    style={{ fontFamily: '"Montserrat", sans-serif' }}
  >
    Home
  </NavLink>
</li>    
<li>
  <NavLink
    to="/categories"
    className={({isActive}) => `transition font-medium hover:text-white/70 ${isActive ? 'text-gray-500 border rounded-full py-2 px-5' : 'text-white'}` }
    style={{ fontFamily: '"Montserrat", sans-serif' }}
  >
    Category
  </NavLink>
</li>   
<li>
  <NavLink
    to="/about-us"
    className={({isActive}) => `transition font-medium hover:text-white/70 ${isActive ? 'text-gray-500 border rounded-full py-2 px-5' : 'text-white'}` }
    style={{ fontFamily: '"Montserrat", sans-serif' }}
  >
    About
  </NavLink>
</li>   
<li>
  <NavLink
    to="/contact-us"
    className={({isActive}) => `transition font-medium hover:text-white/70 ${isActive ? 'text-gray-500 border rounded-full py-2 px-5' : 'text-white'}` }
    style={{ fontFamily: '"Montserrat", sans-serif' }}
  >
    Contact
  </NavLink>
</li>   
    </ul>

    {/* Search Bar */}
    {/* <div className="flex items-center border pl-4 gap-2 bg-white border-gray-300 h-[46px] rounded-full overflow-hidden max-w-md w-full">
        <input type="text" className="w-full h-full outline-none text-sm text-gray-700" placeholder="Search..." style={{ fontFamily:'"Montserrat", sans-serif' }}  />
        <button type="submit" className="bg-gray-900 hover:bg-black  w-28 h-9 hover:cursor-pointer rounded-full text-sm text-white mr-[5px] transition-all font-medium" style={{ fontFamily:'"Montserrat", sans-serif' }} >Search</button>
    </div> */}
<button
  type="button"
  className="w-40 py-3 px-4 text-sm font-medium text-white bg-gradient-to-r from-slate-700 to-slate-900 rounded-full shadow hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 hover:cursor-pointer"
>
  Login
</button>


</nav>
</>

    )
}
export default Header