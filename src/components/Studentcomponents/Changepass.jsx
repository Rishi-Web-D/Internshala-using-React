import React, { useState } from "react";
import { asyncChangepass } from "../../store/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const Changepass = () => {
  const { studentid } = useParams();
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const submithandler = () => {
    dispatch(asyncChangepass(studentid,password));
    navigate("/user/student/signin");
  };

  return (
    <div>
      <div className="w-full  flex justify-center flex-col py-10">
        <h1 className="text-3xl font-medium text-zinc-700 text-center mb-10">
          Reset Password
        </h1>
        <div className="form  border-2 w-1/4 mx-auto rounded flex flex-col gap-4  font-bold tracking-wide   text-zinc-700 px-5 py-5">
          <label htmlFor="input">Enter New password : </label>
          <input type="text" className="border-2 border-zinc-500 rounded" />
          <label htmlFor="input">Re-enter New password : </label>
          <input
            type="text"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            className="New border-2 border-zinc-500 rounded"
          />
          <button
            onClick={() => submithandler()}
            className=" mt-2 rounded  px-3 py-2 border-[1.1px] border-zinc-400 bg-[#00A5EC] text-white"
          >
            Submit
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Changepass;
