// import React from 'react'


// const Work = () => {
//   return (
//   <section className=''>
//    <div className='bg-Dark-Violet w-[100] h-44 flex items-center relative p-6 bg-work-pattern bg-cover bg-no-repeat flex-row '>
// <p className='text-4xl font-DM  font-normal text-white '>Find out more <br /> about how we work
// </p>

  
// <div className='absolute right-14'> 
// <button className='border-[1px] border-white font-karla text-white font-medium p-3 justify-end ml-10 hover:text-very-dark-violet hover:bg-white'> HOW WE WORK</button>
// </div>



//    </div>
 


//   </section>
//   )
// }

// export default Work

import React from 'react';

const Work = () => {
  return (
    <section className=''>
      <div className='bg-Dark-Violet h-[15rem] sm:h-[10rem] flex items-center justify-center relative p-6 bg-work-pattern bg-cover bg-no-repeat'>
        <p className='text-4xl sm:text-2xl font-DM font-normal text-white text-center'>
          Find out more <br /> about how we work
        </p>
        <div className='absolute bottom-4 sm:bottom-auto right-4 sm:right-auto left-4 sm:left-auto'>
          <button className='border-[1px] border-white font-karla text-white font-medium p-3 sm:p-2 hover:text-very-dark-violet hover:bg-white'>
            HOW WE WORK
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
