import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncsignin } from "../../store/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import img from "../../assets/signinstudent.avif";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const signinuser = () => {
    const newuser = {
      email: email,
      password: password,
    };
    dispatch(asyncsignin(newuser));
  };

  useEffect(() => {
    isAuth && navigate("/user/student");
  }, [isAuth]);

  return (
    <div>
      <Nav />
      <div className="flex justify-center  h-screen items-center mt-10 sm:mt-0 gap-5">
        <div className="img w-[55vw] sm:hidden">
          <img src={img} alt="" />
        </div>
        <div className="thisform w-[35vw]  text-center flex flex-col items-center ">
          <div className="textall mb-4 relative  sm:mb-0  ">
            <h1 className="text-[3vw] sm:text-[4vh] font-extrabold text-nowrap text-zinc-800 mb-4">
              Sign-In as Student
            </h1>
            <img
              className="absolute right-[3%] bottom-[45%] sm:w-[20vh] sm:bottom-[63%]"
              src="https://internshala.com/static/images/registration/student_new/underline_d.svg"
              alt=""
            />
            <p className="text-[1.5vw] font-semibold text-center  text-zinc-800 mb-9 sm:text-[2vh]">
              1,50,000+ companies hiring on Internshala
            </p>
          </div>
          <div className="email  text-start mb-4">
            <p className=""> Email</p>
            <input
              className="sm:w-56 w-96 h-10 rounded mt-1 px-3 py-2 border-[1.1px] border-zinc-400"
              type="text"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="pasword text-start">
            <p className=""> Password</p>
            <input
              className="sm:w-56 w-96 h-10 rounded mt-1 px-3 py-2 border-[1.1px] border-zinc-400"
              type="text"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <p className="text-sm -ml-12 mt-3 sm:w-56 sm:ml-0">
            By signing up, you agree to our
            <span className="text-[#008BDC]">Terms and Conditions</span>.
          </p>
          <button
            className="sm:w-56 w-96 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400 bg-[#00A5EC] text-white"
            onClick={signinuser}
          >
            Signin User
          </button>
          <p className="sm:w-56 text-md my-4 -ml-2">
            New User ?
            <Link to="/user/student/signup" className="text-[#00A5EC] ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
