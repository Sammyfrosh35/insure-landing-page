

import React from 'react';
import logo from "../assets/images/logo.svg";

const Nav = () => {
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
        <div className='flex items-center gap-7 py-[1.25rem] leading-normal text-dark-grayish-violet font-medium font-karla cursor-pointer text-[16px] flex-row'>
          <a href="#" className="hover:text-very-dark-violet">HOW WE WORK</a>
          <a href="#" className="hover:text-very-dark-violet">BLOG</a>
          <a href="#" className="hover:text-very-dark-violet">ACCOUNT</a>
          <button className='py-1 m-1 p-1 w-36 text-[16px] bg-none border-[2px] border-very-dark-violet text-Dark-Violet hover:bg-very-dark-violet hover:text-white'>
            <a>VIEW PLANS</a>
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Nav;



