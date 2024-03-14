import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Employeenav from "./Employeenav";
import { asynccurrentEmployee, asyncresetEmppass } from "../../store/Actions/employeeActions";
const Empresetpass = () => {
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const { employee } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const submithandler = () => {
    dispatch(asyncresetEmppass(employee._id, password));
    navigate("/user/student/signin");
  };

  useEffect(() => {
    dispatch(asynccurrentEmployee());
  }, [dispatch]);
  return (
    <div>
      {!employee ? <h1>Employee not available </h1> : <Employeenav />}
      <div className="w-full  flex justify-center flex-col py-10">
        <h1 className="text-3xl font-medium text-zinc-700 text-center mb-10">
          Reset Password
        </h1>
        <div className="form  border-2 w-1/4 mx-auto rounded flex flex-col gap-4  font-bold tracking-wide  text-zinc-700 px-5 py-5 sm:w-[70%]">
          <label htmlFor="input">Enter Old password : </label>
          <input type="text" className="border-2 border-zinc-500 rounded" />
          <label htmlFor="input">Enter New password : </label>
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

export default Empresetpass;
