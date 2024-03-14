import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncremoveUser } from "../../store/Actions/userActions";

const nav = () => {
  const [menu, setmenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const LogoutHandler = () => {
    dispatch(asyncremoveUser());
    console.log("Student logged out");
    navigate("/");
  };

  return (
    <div className="w-screen py-3 px-3  flex justify-between items-center font-[Inter Medium] border-b-2">
      <div className="leftnavdiv flex items-center">
        <Link to="/user/student">
          <img className="h-[48px]" src={logo} alt="" title="Dashboard" />
        </Link>
      </div>
      <div className="rightnavdiv flex items-center gap-[5vw] font-semibold text-zinc-600 text-md">
        <div className="flex gap-[5vw]  md:hidden ">
          <Link to="/user/internship/readAll" className="text-nowrap">
            Internships
            <IoMdArrowDropdown className="text-2xl inline-block sm:hidden" />
          </Link>
          <Link to="/user/job/readAll" className="text-nowrap">
            Jobs
            <IoMdArrowDropdown className="text-2xl inline-block sm:hidden" />
          </Link>
          <a href="#" className="text-nowrap">
            Courses
            <IoMdArrowDropdown className="text-2xl inline-block sm:hidden" />
          </a>
        </div>

        <div className="flex gap-[5vw]  sm:hidden ">
          <p>
            <Link>Clubs</Link>
          </p>
          <p>
            <CiBookmark className="text-2xl inline-block " />
          </p>
          <p>
            <IoChatboxEllipsesOutline className="text-2xl inline-block " />
          </p>
        </div>

        <div className="flex items-center relative">
          <button className=" h-9 w-9 " title="Logout" onClick={LogoutHandler}>
            <img
              className="object-cover h-full w-full rounded-full"
              src={user.avatar.url}
              alt=""
            />
          </button>
          <IoMdArrowDropdown
            style={menu ? { display: "none" } : { display: "initial" }}
            className="text-2xl inline-block cursor-pointer"
            onClick={() => setmenu(!menu)}
          />
          <IoMdArrowDropup
            style={menu ? { display: "initial" } : { display: "none" }}
            className="text-2xl inline-block cursor-pointer"
            onClick={() => setmenu(!menu)}
          />
          <div
            style={menu ? { display: "initial" } : { display: "none" }}
            className="menu  absolute px-10 py-2 border-2 origin-top-right top-[4.2vw] -right-3 text-nowrap  sm:top-[8vh] sm:bg-zinc-600 sm:text-white sm:rounded-bl-lg bg-white"
          >
            <p className="sm:flex sm:flex-col sm:-gap-10">
              <Link to="/user/student/profile">Profile</Link>
              <br />
              <Link to="/user/internship/readAll">Read Internship</Link>
              <br />
              <Link to="/user/job/readAll">Read Job</Link>
              <br />
              <Link to={`/user/student/reset-password/${user._id}`}>
                Reset-Password
              </Link>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nav;
