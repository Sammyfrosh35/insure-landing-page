
import React from 'react';
import bg from "../assets/images/bg-pattern-intro-right-desktop.svg";
import heroImg from '../assets/images/image-intro-desktop.jpg';
import mobile from '../assets/images/image-intro-mobile.jpg'
const Hero = () => {
  return (
    <section className='w-full grid min-h-[72vh] gap-8   bg-Dark-Violet relative max-lg:flex-col'>

 {/* Image on top for mobile */}
      <div className='md:hidden'>
        <img src={mobile} alt="heroimage" className='w-screen' />
       </div>


      <div className='relative justify-center flex-col items-center ml-10 '>
      <hr className='border border-slate-300  w-1/5 mt-12 mb-12 '/>
              <p className='text-6xl text-white font-DM justify-start items-center relative mt-15'>
          Humanizing <br />
          <div className='gap-4 flex '>
            <span>your</span>
            <span>insurance.</span>
          </div>
        </p>

        <p className='font-karla font-[400] text-white mt-5 text-[16px]'>
          <span>Get your life insurance coverage easier and faster. We blend our expertise</span> <br />
          <span>and technology to help you find the plan that is right for you. Ensure you </span> <br />
          <span>and your loved ones are protected.</span>
        </p>  
        <button className='py-2 mt-5 w-36 bg-none border-[1px] border-white text-white hover:bg-white hover:text-very-dark-violet font-medium h-10 '>      
          <a>VIEW PLANS</a>
        </button>
      </div>

      {/* Image on the right for desktop */}
      <div className='hidden md:block absolute top-20 right-20 bottom-[-5] mr-14'>      
         <img src={heroImg} alt="heroimage" width={400} />
      </div>

     
    </section>
  );
};

export default Hero;
// import React from 'react';
// import bg from "../assets/images/bg-pattern-intro-right-desktop.svg";
// import heroImg from '../assets/images/image-intro-desktop.jpg';

// const Hero = () => {
//   return (
//     <section className='w-full min-h-[72vh] bg-Dark-Violet relative md:grid md:grid-cols-2 md:items-center md:text-left'>

//       {/* Image on top for mobile */}
//       <div className='md:hidden'>
//         <img src={heroImg} alt="heroimage" className="w-full" />
//       </div>

//       <div className='relative flex flex-col items-center justify-center md:justify-start md:ml-10'>
//         <hr className='border border-slate-300 w-1/5 mt-12 mb-12 md:hidden' />
//         <p className='text-6xl text-white font-DM justify-center md:justify-start items-center relative mt-15 md:mt-0'>
//           Humanizing <br />
//           <div className='gap-7 flex items-stretch'>
//             <span>your</span>
//             <span>insurance.</span>
//           </div>
//         </p>

//         <p className='font-karla font-[400] text-white mt-5 text-[16px] text-center md:text-left'>
//           <span>Get your life insurance coverage easier and faster. We blend our expertise</span> <br />
//           <span>and technology to help you find the plan that is right for you. Ensure you </span> <br />
//           <span>and your loved ones are protected.</span>
//         </p>  
//         <button className='py-2 mt-5 w-36 bg-none border-[1px] border-white text-white hover:bg-white hover:text-very-dark-violet font-medium h-10'>      
//           <a>VIEW PLANS</a>
//         </button>
//       </div>

//       {/* Image on the right for desktop */}
//       <div className='hidden md:block absolute top-20 right-20 bottom-[-5] mr-14'>
//         <img src={heroImg} alt="heroimage" width={400} />
//       </div>

//     </section>
//   );
// };

// export default Hero;
