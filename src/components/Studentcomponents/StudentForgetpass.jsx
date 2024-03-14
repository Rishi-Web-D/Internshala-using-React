import React, { useState } from "react";
import Nav from "../Nav";
import { asyncforgotpass } from "../../store/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Resetpass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const submithandler = () => {
    dispatch(asyncforgotpass(email));
    navigate("/user/student/signin");
  };

  return (
    <div>
      <Nav />
      <div className="w-full  flex justify-center flex-col py-10 mt-[5vw] sm:mt-[8vh]">
        <h1 className="text-3xl font-medium text-zinc-700 text-center mb-10">
          Forgot Password
        </h1>
        <div className="form  border-2 w-1/4 mx-auto rounded flex flex-col gap-4  font-bold tracking-wide   text-zinc-700 px-5 py-5 sm:w-[70%]">
          <label htmlFor="input">Enter Email for link : </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="New border-2 border-zinc-500 rounded"
          />
          <button
            onClick={() => submithandler()}
            className=" mt-2 rounded  px-3 py-2 border-[1.1px] border-zinc-400 bg-[#00A5EC] text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resetpass;
