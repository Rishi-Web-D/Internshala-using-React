import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { SlSocialYoutube } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=" min-h-[50vh] bg-[#333333] text-[#e5e5e5] px-20 py-10 sm:px-5 sm:min-h-[40vh]">
      <div className="UppperLinks flex gap-[5vw] sm:justify-between">
        <div className=" text-[1.2vw] font-semibold flex flex-col gap-3 sm:text-[2vh]">
          <p>About us</p>
          <p>We're hiring</p>
          <p className="sm:hidden">Hire interns for your company</p>
          <p>Post a Job</p>
        </div>
        <div className=" text-[1.2vw] font-semibold flex flex-col gap-3 sm:hidden ">
          <p>Team Diary</p>
          <p>Blog</p>
          <p>Our Services</p>
        </div>
        <div className=" text-[1.2vw] font-semibold flex flex-col gap-3 sm:text-[2vh]">
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Contact us</p>
        </div>
        <div className=" text-[1.2vw] font-semibold flex flex-col gap-3 sm:hidden">
          <p>Sitemap</p>
          <p>College TPO registration</p>
          <p>List of Companies</p>
        </div>
      </div>
      <div className="Lowermaterial mt-10 flex justify-between sm:flex-col ">
        <div className="text-[1.2vw] flex items-center gap-5 sm:text-[1.8vh]">
          <button className="border-[1.5px] px-2 py-2 font-semibold flex rounded items-center gap-2 ">
            <FaGooglePlay /> <p>Get Android App</p>
          </button>
          <FaInstagram className="text-[2vw] sm:text-[4vh] " />
          <LuTwitter className="text-[2vw] sm:text-[4vh]" />
          <SlSocialYoutube className="text-[2vw] sm:text-[4vh]" />
          <FiLinkedin className="text-[2vw] sm:text-[4vh]" />
        </div>
        <div>
          <p className="text-[1.2vw] mt-5 sm:text-[2.9vh]">
            © 2021 Internshala. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
