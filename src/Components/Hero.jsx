import React from 'react'
import bg from "../assets/images/bg-pattern-intro-right-desktop.svg"

const Hero = () => {
  return (
    <section className='bg-no-repeat bg-right-top ..." style="background-image: url(../assets/images/bg-pattern-intro-right-desktop.svg); bg-very-dark-violet  w-full max-h-full'>

      <img src={bg} alt="bg-right" width={150} className=''/>
      <div className='relative'>
      <h1 className='text-3xl text-white font-DM'>Humanizing <br /> your <br /> insurace.</h1>
      </div>
 

 </section>
  )
}

export default Hero