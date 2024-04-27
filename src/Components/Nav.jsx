
import  hamburger  from "../assets/icons//icon-hamburger.svg"
import React from 'react';
import logo from "../assets/images/logo.svg";
import { useState  } from "react";


  
const Nav = () => {
  // State to track the visibility of the menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <section className=''>
      <nav className='bg-white max-container  flex justify-between items-center'>
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="logo" width={100} className='object-fit'/>
          </a>
        </div>

        {/* Menu Items */}
            <ul className={`max-lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className='flex items-center gap-7 py-[1.25rem] leading-normal text-dark-grayish-violet font-medium font-karla cursor-pointer text-[16px] flex-row'>
          <a href="#" className="hover:text-very-dark-violet">HOW WE WORK</a>
          <a href="#" className="hover:text-very-dark-violet">BLOG</a>
          <a href="#" className="hover:text-very-dark-violet">ACCOUNT</a>
          <button className='py-1 m-1 p-1 w-36 text-[16px] bg-none border-[2px] border-very-dark-violet text-Dark-Violet hover:bg-very-dark-violet hover:text-white'>
            <a>VIEW PLANS</a>
          </button>
        </div>
        </ul>



        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hmburger" width={25} height={25}/>
        </div>
      </nav>
    </section>
  );
}

export default Nav;



