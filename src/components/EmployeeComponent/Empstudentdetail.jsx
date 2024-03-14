import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Employeenav from "./Employeenav";
import {
  asynccurrentEmployee,
  asyncgetstudent,
} from "../../store/Actions/employeeActions";

const Empstudentdetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employee, student } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentEmployee());
    dispatch(asyncgetstudent(id));
  }, []);

  return !student ? (
    <h1>LOADING...</h1>
  ) : (
    <>
      <Employeenav />
      <div className="font-['inter']  w-full h-full  py-5 overflow-hidden">
        <div className="Details border-2 w-[80%] font-medium   m-auto  rounded px-10  py-12 sm:w-[90%]">
          <h1 className="text-4xl text-center text-zinc-800 font-semibold mb-5 font-['Gilroy'] flex items-center justify-between sm:text-left">
            {student.firstname} {student.lastname}
            <img
              className="w-20 h-20 rounded-2xl"
              src={student.avatar.url}
              alt=""
            />{" "}
          </h1>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Email : {student.email}
          </h2>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Phone : {student.contact}
          </h2>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Location : {student.city}
          </h2>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Gender : {student.gender}
          </h2>

          <div className="Responsibility  mt-4 mb-4"></div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Empstudentdetail;
