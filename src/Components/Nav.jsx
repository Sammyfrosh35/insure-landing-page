import React from 'react'
import logo from "../assets/images/logo.svg"

const Nav = () => {
  return (
    <header className='relative z-10 '>
  <nav className='bg-red-400 max-container '>
            
         <ul className='flex
    items-center gap-5 flex-row  leading-normal text-Very-Light-Gray mb-3 font-karla font-[500]  text-[12px] justify-center' >
   <a href="/">
         <img src={logo} alt="logo" width={70} height={29}/>
         </a>


        <a href="#"><li>HOW WE WORK</li></a>
        <a href="#"><li>BLOG</li></a>
        <a href="#"><li>ACCOUNT</li></a>
        <a href="#"><button className='bg-Dark-Violet py-2 m-2 p-2 w-[100%]'> VIEW PLANS</button></a>
    </ul>

  </nav>
</header>

  )
}

export default Nav