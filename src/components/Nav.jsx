import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const nav = () => {
  const navigate = useNavigate();
  const [showMenu, setshowMenu] = useState(false);

  const [showlogin, setshowlogin] = useState(false);
  const studentsignin = () => {
    navigate("/user/student/signin");
  };
  const employeesignin = () => {
    navigate("/employee/signin");
  };
  const Studentforgetpass = () => {
    navigate("/user/student/send-mail");
  };

  return (
    <>
      <div className="fixed bg-white z-50 top-0 w-full py-3 sm:py-1 px-3  flex justify-between items-center font-[Inter Medium] border-b-2">
        <div className="leftnavdiv flex items-center  gap-14 font-semibold text-zinc-600">
          <Link to="/">
            <img
              className="h-[3.5vmax] sm:h-[6vh] bg-zinc-400"
              src={logo}
              alt=""
            />
          </Link>
          <a href="#" className="sm:hidden">
            Internships
            <IoMdArrowDropdown className="text-2xl inline-block" />
          </a>
          <a href="#" className="sm:hidden">
            Jobs
            <IoMdArrowDropdown className="text-2xl inline-block" />
          </a>
          <a href="#" className="sm:hidden">
            Courses
            <IoMdArrowDropdown className="text-2xl inline-block" />
          </a>
        </div>
        <div className="rightnavdiv flex  gap-4 font-semibold">
          <label>
            <CiSearch className="text-2xl inline-block text-zinc-600 sm:hidden" />
          </label>
          <input type="text" placeholder="Search" className="w-24 sm:hidden" />
          <div className=" w-28 border-[1px] border-[#00A5EC]  h-8 rounded text-[1.15vw] flex flex-col sm:hidden">
            <button
              className="text-[#00A5EC] py-1 rounded text-[1.15vw] sm:hidden"
              onClick={() => setshowlogin(!showlogin)}
            >
              Login
            </button>
            <div
              style={showlogin ? { display: "initial" } : { display: "none" }}
              className="Loginbuttons w-28 mt-7 flex items-center gap-10"
            >
              <button
                className="text-[#00A5EC] border-[1px] border-[#00A5EC] w-28 h-fit rounded text-[1.15vw] flex flex-col justify-start items-center"
                onClick={studentsignin}
              >
                As Student
              </button>
              <br />
              <button
                className="text-[#00A5EC] border-[1px] border-[#00A5EC] w-28 h-fit rounded text-[1.15vw] flex flex-col justify-start items-center"
                onClick={employeesignin}
              >
                As Employee
              </button>
              <button
                className="text-[#00A5EC] border-[1px] border-[#00A5EC] w-fit h-fit rounded text-[1.15vw] flex flex-col justify-start items-center mt-3  "
                onClick={Studentforgetpass}
              >
                Forgot Password(Student)
              </button>
            </div>
          </div>
          <button className="text-white  bg-[#00A5EC] px-4 py-[.3vw] rounded  text-[1.15vw] sm:hidden">
            <Link to="/user/student/signup">Candidate Sign-up</Link>
          </button>
          <button className="text-white bg-[#00A5EC] px-4 py-[.3vw] rounded  text-[1.15vw] sm:hidden">
            <Link to="/employee/signup">Employer Sign-up</Link>
          </button>
          <button
            onClick={() => setshowMenu(!showMenu)}
            className="hidden sm:inline-block"
          >
            <MenuIcon className="sm:h-14" />
          </button>
        </div>
      </div>
      <div
        style={showMenu ? { display: "initial" } : { display: "none" }}
        className=" menu z-50 absolute bg-slate-600 right-0 px-5 py-5 top-16 rounded-bl-lg "
      >
        <button
          className="text-white   text-[2.5vh] mb-2 text-center block"
          onClick={studentsignin}
        >
          Login as student
        </button>

        <button className="text-white   text-[2.5vh] mb-2 text-center block">
          <Link to="/user/student/signup">Signup as student</Link>
        </button>
        <button
          className="text-white   text-[2.5vh] mb-2 text-center block"
          onClick={Studentforgetpass}
        >
          Forgot Password (Student)
        </button>
        <button
          className="text-white   text-[2.5vh] mb-2 text-center block "
          onClick={employeesignin}
        >
          Login as employee
        </button>
        <button className="text-white   text-[2.5vh] mb-2 text-center block ">
          <Link to="/employee/signup"> Signup as employee</Link>
        </button>
      </div>
    </>
  );
};

export default nav;
