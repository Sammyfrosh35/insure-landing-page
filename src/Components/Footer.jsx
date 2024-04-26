import React from "react";
import footerLogo from "../assets/images/logo.svg";
import facebook from "../assets/icons/icon-facebook.svg";
import twitter from "../assets/icons/icon-twitter.svg";
import pinterest from "../assets/icons/icon-pinterest.svg";
import instagram from "../assets/icons/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-Very-Light-Gray max-container">
      <div className="flex  items-start  flex-wrap max-lg:flex-col justify-between py-[1.25rem] mt-3">
        {/* <div className="flex flex-col items-start"> */}
          <a href="/">
            <img src={footerLogo} alt="" width={100} />
          </a>
            <div className="flex  items-center  gap-3 mx-10 cursor-pointer">
              <img src={facebook} alt="fb" />
              <img src={twitter} alt="X" />
              <img src={pinterest} alt="P" />
              <img src={instagram} alt="Ig" />
            </div>
      </div>

      <hr className="w-[100] border-[1px] mb-10 " />
<div className="flex  justify-between ">

      <div className="">
       <h4 className="text-dark-grayish-violet font-karla text-1xl font-medium mb-6"> OUR COMPANY</h4>
       <ul className="">
        <a href="">
        <li className="text-1xl font-karla font-semibold hover:underline mb-2 leading-normal">HOW WE WORK </li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">WHY INSURE?</li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">VIEW PLANS </li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">REVIEWS</li>
      </a>
       </ul >
      </div>


      <div className="">
       <h4 className="text-dark-grayish-violet font-karla text-1xl font-medium mb-6">HELP ME</h4>
       <ul className="">
        <a href="">
        <li className="text-1xl font-karla font-semibold hover:underline mb-2 leading-normal">FAQ </li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">TERM OF USE</li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">PRIVACY POLICY</li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">COOKIES</li>
      </a>
       </ul >
      </div>


      <div className="">
       <h4 className="text-dark-grayish-violet font-karla text-1xl font-medium mb-6">CONTACT</h4>
       <ul className="">
        <a href="">
        <li className="text-1xl font-karla font-semibold hover:underline mb-2 leading-normal">SALES </li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">SUPPORT</li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">LIVE CHAT</li>
      </a>
       </ul >
      </div>


      <div className="">
       <h4 className="text-dark-grayish-violet font-karla text-1xl font-medium mb-6">HELP ME</h4>
       <ul className="">
        <a href="">
        <li className="text-1xl font-karla font-semibold hover:underline mb-2 leading-normal">OTHERS </li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">PRESS</li>
        <li className="text-1xl font-karla font-semibold hover:underline  mb-2 leading-normal">LICENSES</li>
      </a>
       </ul >
      </div>

</div>
    </footer>
  );
};

export default Footer;
