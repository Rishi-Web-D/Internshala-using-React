import React, { useEffect } from "react";
import Employeenav from "./Employeenav";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asynccurrentEmployee } from "../../store/Actions/employeeActions";

const Employeeprofile = () => {
  const navigate = useNavigate();
  const { employee } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentEmployee());
  }, []);

  return !employee ? (
    <h1>LOADING...</h1>
  ) : (
    <>
      <Employeenav />
      <div className="font-['inter']  w-full h-full  py-5 overflow-hidden  ">
        <div className="Details border-2 w-[80%] font-medium   m-auto  rounded px-10  py-12 sm:w-[90%] sm:px-4 sm:py-5">
          <h1 className="text-4xl text-center text-zinc-800 font-semibold mb-5 font-['Gilroy'] flex items-center justify-between sm:text-left">
            {employee.firstname} {employee.lastname}
            <img
              className="w-20 h-20 rounded-2xl"
              src={employee.organizationlogo.url}
              alt=""
            />{" "}
          </h1>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Email : {employee.email}
          </h2>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Phone : {employee.contact}
          </h2>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Company : {employee.organizationname}
          </h2>

          <hr />
          <div className="Internships  mt-4 mb-4 ">
            <p className="mb-2">Internships Created By you :</p>
            <div className="grid grid-cols-3 sm:grid-cols-2">
              {employee.internships.length === 0 && (
                <p className="text-sm text-zinc-700 h-10">
                  Not Uploaded any Internships
                </p>
              )}
              {employee.internships.map((internship, index) => {
                return (
                  <div key={index} className="text-sm h-10  flex gap-2">
                    {index}.
                    <Link to={`/employee/internship/read/${internship}`}>
                      <p className="text-blue-600 underline ">View Details ,</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="Jobs  mt-4 mb-4">
            <p className="mb-2">Jobs Created By you :</p>
            <div className="grid grid-cols-3 ">
              {employee.jobs.length === 0 && (
                <p className="text-sm text-zinc-700 h-10">
                  Not Uploaded any Jobs
                </p>
              )}
              {employee.jobs.map((job, index) => {
                return (
                  <div key={index} className="text-sm h-10  flex gap-2">
                    {index}.
                    <Link to={`/employee/internship/read/${job}`}>
                      <p className="text-blue-600 underline ">View Details ,</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" mt-16 mb-3  flex justify-center">
            <Link
              to={`/employee/update/${employee._id}`}
              className="px-4 py-3   bg-[#00A5EC] text-base align-middle text-white rounded "
            >
              UPDATE EMPLOYEE DETAILS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employeeprofile;
