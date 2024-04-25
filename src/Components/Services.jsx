import React from 'react'
import snappy from "../assets/icons/icon-snappy-process.svg"
import affordable from  "../assets/icons/icon-affordable-prices.svg"
import people from  "../assets/icons/icon-people-first.svg"



const Services = () => {
  return (
    <section className="max-container flex  flex-wrap gap-9">

      <div>

    <hr className='mb-9 w-20 border-[1px]'/>

    <p className='font-DM font- text-4xl text-Dark-Violet'>We're different</p>
    

    <div className='flex justify-between gap-10 mt-16'>
    
    <div className="flex-1 sm:w-[350px] 
   sm:min-w-[350px] w-full rounded-[20px] 
    ">

    <div className="w-11 h-11 flex
        justify-center items-center
         rounded-full bg-Grayish-Blue">
           <img src={snappy} alt="icon"
           width={50} height={30} />

    </div>
   <h3 className='font-semibold font-DM text-Dark-Violet text-2xl mt-3'>Snappy Process</h3>
    <p className='font-karla font-[16px] text-dark-grayish-violet leading-normal mt-3'>Our application process can be completed in minutes, not hours. Dont get stuck filling in tedious forms</p>
    
    </div>

    <div className="flex-1 sm:w-[350px] 
   sm:min-w-[350px] w-full rounded-[20px] 
    ">

    <div className="w-11 h-11 flex
        justify-center items-center
         rounded-full bg-Grayish-Blue">
           <img src={affordable} alt="icon"
           width={50} height={30} />

    </div>
    <h3 className='font-semibold font-DM text-Dark-Violet text-2xl mt-3'>Affordable Prices</h3>
    <p className='font-karla font-[16px] text-dark-grayish-violet leading-normal mt-3'>We wont want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
    
    </div>





    <div className="flex-1 sm:w-[350px] 
   sm:min-w-[350px] w-full rounded-[20px] 
    ">

    <div className="w-11 h-11 flex
        justify-center items-center
         rounded-full bg-Grayish-Blue">
           <img src={people} alt="icon"
           width={50} height={30} />

    </div>
    <h3 className='font-semibold font-DM text-Dark-Violet text-2xl mt-3'>People First</h3>
    <p className='font-karla font-[16px] text-dark-grayish-violet leading-normal mt-3'>Our plans arent full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
    
    </div>

</div>

    </div>



    </section>
  )
}

export default Services