

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
          <a href="#">HOW WE WORK</a>
          <a href="#">BLOG</a>
          <a href="#">ACCOUNT</a>
          <button className='bg-Dark-Violet py-1 m-1 p-1 w-36 text-white text-[16px]'>
            <a>VIEW PLANS</a>
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Nav;



