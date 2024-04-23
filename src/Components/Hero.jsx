import React from 'react'
import bg from "../assets/images/bg-pattern-intro-right-desktop.svg"
import heroImg from '../assets/images/image-intro-desktop.jpg'

const Hero = () => {
  return (
    <section className='w-full flex xl:flex-row flex-col  min-h-[70vh] gap-10 max-container bg-Dark-Violet'>

      <div className='relative justify-center flex-col items-center'>
      <p className='text-7xl text-white font-DM justify-start items-center relative mt-20'>
        Humanizing <br />
        <div className='gap-8 flex items-stretch'>
          <span>your</span>
          <span>insurnace.</span>
        </div>
    </p>

      <p className='font-karla  font-[400] text-white mt-5 text-[16px]'>
       <span> Get your life insurance coverage easier and faster. We blend our expertise</span> <br /> 
        <span> and technology to help you find the plan that is right for you. Ensure you </span> <br />
          <span>and your loved ones are protected.</span>
      </p>  
    <button className='py-2  mt-4 w-36 text-violet-900  border border-s-white font-karla bg-white  font-semibold'>      
 <a>VIEW PLANS</a>
    </button>


 </div>
        

          {/* right hand side image */}
<div className='absolute justify-end items-end flex'>
  <img src={heroImg} alt="heroimage" 
  height={100} />
</div>

 
 </section>
  )
} 

export default Hero
