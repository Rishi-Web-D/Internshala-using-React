import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncemployeesignup } from "../../store/Actions/employeeActions";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";

const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [organizationname, setorganizationname] = useState("");
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const signupuser = () => {
    const newuser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      contact: contact,
      password: password,
      organizationname: organizationname,
    };
    dispatch(asyncemployeesignup(newuser));
  };

  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth]);
  return (
    <div className="mt-20 sm:mt-12 sm:py-3">
      <Nav />
      <div className="h-full w-screen flex justify-center">
        <div className="thisform w-[35vw] mt-4 text-center sm:w-[100%]">
          <div className="mb-4 relative  sm:mb-0">
            <h1 className="text-[3vw]  sm:text-[4.5vh]  font-extrabold text-nowrap text-zinc-800 mb-2">
              Sign-up as Employee
            </h1>
            <img
              className="absolute right-[5%] bottom-[20%] sm:w-[20vh] sm:right-[10%] sm:bottom-[27%]"
              src="https://internshala.com/static/images/registration/student_new/underline_d.svg"
              alt=""
            />
            <p className="text-[1.5vw] font-semibold text-center  text-zinc-800 sm:text-[2vh]">
              1,50,000+ companies hiring on Internshala
            </p>
          </div>
          <input
            className="sm:w-56 w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px]  border-zinc-400"
            type="text"
            onChange={(e) => setfirstname(e.target.value)}
            placeholder="Enter firstname"
          />
          <br />
          <input
            className="sm:w-56 w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setlastname(e.target.value)}
            placeholder="Enter lastname"
          />{" "}
          <br />
          <input
            className="sm:w-56 w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter email"
          />
          <input
            className="sm:w-56 w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setcontact(e.target.value)}
            placeholder="Enter contact"
          />
          <input
            className="sm:w-56 w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter password"
          />
          <input
            className="sm:w-56 w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setorganizationname(e.target.value)}
            placeholder="Enter organizationname"
          />
          <p className="sm:w-56 sm:ml-16 text-sm -ml-12 mt-3">
            By signing up, you agree to our{" "}
            <span className="text-[#008BDC]">Terms and Conditions</span>.
          </p>
          <button
            className="sm:w-56 w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400 bg-[#00A5EC] text-white"
            onClick={signupuser}
          >
            Signup User
          </button>
          <p className="text-md my-4 -ml-2">
            Already registered?{" "}
            <Link to="/employee/signin" className="text-[#00A5EC]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
