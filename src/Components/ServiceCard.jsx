import React from 'react'

const ServiceCard = ({imgURL, label, text}) => {
  return (
   <div className="flex-1 sm:w-[350px] 
   sm:min-w-[350px] w-full rounded-[20px] 
    ">

    <div className="w-11 h-11 flex
        justify-center items-center
         rounded-full bg-Grayish-Blue">
           <img src={imgURL} alt={label}
            width={24} height={24} />

    </div>

    <h3>{label}</h3>
    <p>{text}</p>

   </div>
  )
}

export default ServiceCard