import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  asynccurrentEmployee,
  asyncremoveUser,
} from "../../store/Actions/employeeActions";

const Employeenav = () => {
  const [menu, setmenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentEmployee());
  }, []);
  const { employee } = useSelector((state) => state.employee);
  const LogoutHandler = () => {
    console.log("Employee logged out");
    dispatch(asyncremoveUser());
    navigate("/");
  };

  return employee ? (
    <div className="w-full py-3 px-3  flex justify-between items-center font-[Inter Medium] border-b-2">
      <div className="leftnavdiv flex items-center">
        <Link to="/employee/dashboard">
          <img className="h-12" src={logo} alt="" title="Dashboard" />
        </Link>
      </div>
      <div className="rightnavdiv flex  gap-11 font-semibold text-zinc-600 text-md">
        <Link to="/employee/internship/readAll" className="sm:hidden">
          Internships
          <IoMdArrowDropdown className="text-2xl inline-block" />
        </Link>
        <Link to="/employee/job/readAll" className="sm:hidden">
          Jobs
          <IoMdArrowDropdown className="text-2xl inline-block" />
        </Link>
        <a href="#" className="sm:hidden">
          Courses
          <IoMdArrowDropdown className="text-2xl inline-block" />
        </a>
        <p className="sm:hidden">
          <Link>Clubs</Link>
        </p>
        <p className="sm:hidden">
          <CiBookmark className="text-2xl inline-block " />
        </p>
        <p>
          <IoChatboxEllipsesOutline className="text-2xl inline-block  sm:hidden" />
        </p>

        <div className="flex items-center relative">
          <button className=" h-9 w-9 " title="Logout" onClick={LogoutHandler}>
            <img
              className="object-cover h-full w-full rounded-full"
              src={employee.organizationlogo.url}
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
              <Link to="/employee/profile">Profile</Link>
              <br />
              <Link to="/employee/internship/create">Create Internship</Link>
              <br />
              <Link to="/employee/internship/readAll">Read Internship</Link>
              <br />
              <Link to="/employee/job/create">Create Job</Link>
              <br />
              <Link to="/employee/job/readAll">Read Job</Link>
              <br />
              <Link to={`/employee/reset-password/${employee._id}`}>
                Reset-Password
              </Link>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading nav...</h1>
  );
};

export default Employeenav;
