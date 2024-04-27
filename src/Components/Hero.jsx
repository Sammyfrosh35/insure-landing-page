
import React from 'react';
import bg from "../assets/images/bg-pattern-intro-right-desktop.svg";
import heroImg from '../assets/images/image-intro-desktop.jpg';

const Hero = () => {
  return (
    <section className='w-full flex xl:flex-row flex-col min-h-[72vh] gap-10 max-container bg-Dark-Violet relative '>


      <div className='relative justify-center flex-col items-center ml-10 max-xl:padding-x  sm:text-left'>
      <hr className='border border-slate-300  w-1/5 mt-12 mb-12' />
              <p className='text-6xl text-white font-DM justify-start items-center relative mt-15'>
          Humanizing <br />
          <div className='gap-7 flex items-stretch'>
            <span>your</span>
            <span>insurance.</span>
          </div>
        </p>

        <p className='font-karla font-[400] text-white mt-5 text-[16px]'>
          <span>Get your life insurance coverage easier and faster. We blend our expertise</span> <br />
          <span>and technology to help you find the plan that is right for you. Ensure you </span> <br />
          <span>and your loved ones are protected.</span>
        </p>  
        <button className='py-2 mt-5 w-36 bg-none border-[1px] border-white text-white hover:bg-white hover:text-very-dark-violet font-medium h-10'>      
          <a>VIEW PLANS</a>
        </button>
      </div>

      {/* right hand side image */}
      <div className='absolute top-20 right-20 bottom-[-5] mr-14'>
        <img src={heroImg} alt="heroimage" width={400} />
      </div>
    </section>
  );
};

export default Hero;
