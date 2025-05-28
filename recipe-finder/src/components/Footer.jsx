import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return(
        <>
        <footer className="bg-black text-white py-12 px-6 md:px-16 lg:px-24 xl:px-32">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
    
    {/* Logo & About */}
    <div>
      <h2 className="text-2xl font-bold mb-4">RecipeFinder</h2>
      <p className="text-sm text-gray-400">
        Discover delicious and easy recipes tailored to your taste. Your culinary journey starts here.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-400">
<li>
  <NavLink
    to="/"
    className={({isActive}) => `text-gray-400 transition font-medium hover:text-white ${isActive ? 'text-white' : 'text-gray-400'} `}
    style={{ fontFamily: '"Montserrat", sans-serif' }}
  >
    Home
  </NavLink>
</li>    
<li>
  <NavLink
    to="/categories"
    className={({isActive}) => `text-gray-400 transition font-medium hover:text-white ${isActive ? 'text-white' : 'text-gray-400'}` }
    style={{ fontFamily: '"Montserrat", sans-serif' }}
  >
    Category
  </NavLink>
</li>   
<li>
  <NavLink
    to="/about-us"
    className={({isActive}) => `text-gray-400 transition font-medium hover:text-white ${isActive ? 'text-white' : 'text-gray-400'}` }
    style={{ fontFamily: '"Montserrat", sans-serif' }}
  >
    About
  </NavLink>
</li>   
<li>
  <NavLink
    to="/contact-us"
    className={({isActive}) => `text-gray-400 transition font-medium hover:text-white ${isActive ? 'text-white' : 'text-gray-400'}` }
    style={{ fontFamily: '"Montserrat", sans-serif' }}
  >
    Contact
  </NavLink>
</li>   
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Resources</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-white">Terms of Use</a></li>
        <li><a href="#" className="hover:text-white">Help Center</a></li>
        <li><a href="#" className="hover:text-white">FAQs</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
      <p className="text-sm text-gray-400 mb-4">Get the best recipes delivered to your inbox.</p>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button className="px-5 py-2 bg-white text-black text-sm rounded-md hover:bg-gray-200">
          Subscribe
        </button>
      </div>
    </div>

  </div>

  {/* Bottom line */}
  <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} RecipeFinder. All rights reserved.</p>
    <div className="flex gap-4 mt-4 md:mt-0">
      {/* Social Icons */}
      <a href="#" className="text-gray-400 hover:text-white transition">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </div>
</footer>

        </>
    )
}

export default Footer