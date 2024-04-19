import React from 'react'
import bg from "../assets/images/bg-pattern-intro-right-desktop.svg"
import heroImg from '../assets/images/image-intro-desktop.jpg'

const Hero = () => {
  return (
    <section className='bg-right-top ... bg-hero-pattern bg-Dark-Violet  w-full max-h-full'>

      <div className='relative'>
      <h1 className='text-3xl text-white font-DM'>Humanizing <br /> your insurace.</h1>
      <p className='text-[16px] font-karla font-light text-white '>Get your life insurance coverage easier and faster. we blend our expertise and technology to help you find the plan thats right for you. Ensure you and your beloved ones are protected </p>
    
<div className='block items-center ' >
<img src={heroImg} alt="heroImg" />
</div>
      </div>



      
 




 <div>
 <button className='py-2 m-10 px-1 w-36 text-white text-[12px] border border-s-white font-karla '>      
 <a>VIEW PLANS</a>
    </button>
 </div>

 </section>
  )
} 

export default Hero