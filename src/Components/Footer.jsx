import React from 'react'
import footerLogo from "../assets/images/logo.svg"
import facebook from "../assets/icons/icon-facebook.svg";
import twitter from "../assets/icons/icon-twitter.svg"
import pinterest from "../assets/icons/icon-pinterest.svg"
import instagram from "../assets/icons/icon-instagram.svg"

const Footer = () => {
  return (
 <footer className='bg-Very-Light-Gray w-full'>
  <div className='flex  items-start  gap-10 flex-wrap max-lg:flex-col '>
<div className='flex flex-col items-start'>
<a href="/">
  <img src={footerLogo} alt=""
  width={150}
  height={46} />
</a>

<div className='flex items-center gap-5 mt-8 cursor-pointer relative'>

  <div className='flex justify-center items-center w-12 h-12 bg-Very-Light-Gray rounded-full gap-3 right-0'>
<img src={facebook} alt="fb" />
<img src={twitter} alt="X" />
<img src={pinterest}alt="P" />
<img src={instagram} alt="Ig" />
  </div>

</div>






</div>



  </div>
 </footer>
  )
}

export default Footer