import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynCallEmpJob } from "../../store/Actions/employeeActions";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Employeenav from "./Employeenav";
import { asynccurrentEmployee } from "../../store/Actions/employeeActions";

const Empreadalljobs = () => {
  const { jobs, employee } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  if (!jobs) {
    dispatch(asynCallEmpJob());
  }
  useEffect(() => {
    dispatch(asynccurrentEmployee());
    dispatch(asynCallEmpJob());
  }, [dispatch]);
  console.log(jobs, employee);
  return (
    <>
      {!employee ? <h1>Employee not available </h1> : <Employeenav />}
      <div className=" bg-[#F0FBFF] px-[8vw] min-h-screen py-4 pb-20 font-[inter] max-w-full">
        <h1 className="text-2xl sm:text-3xl text-center mb-8 font-semibold text-zinc-800">
          Jobs Created by you
        </h1>

        <div className="grid grid-cols-3  gap-[2vw] sm:flex  sm:flex-col sm:gap-5">
          {!jobs[0]
            ? "Unable to load jobs"
            : jobs.map((job) => (
                <div
                  key={job._id}
                  className="sm:min-w-[100%] sm:h-[26vh] w-[25vw] h-[15vw] bg-white px-5 py-3 rounded-xl font-[inter] font-semibold"
                >
                  <h1 className="text-[1.7vw] text-zinc-800 mb-1  sm:text-[2.5vh] sm:mb-0">
                    {job.tittle}
                  </h1>
                  <p className="text-[1.2vw] text-zinc-600 mb-2 sm:text-[2vh]">
                    {job.companyname}
                  </p>
                  <hr />
                  <p className=" text-[1vw] text-zinc-600 flex items-center gap-2 mt-2 mb-1 sm:text-[1.8vh]">
                    <CiLocationOn className="text-[1.5vw] sm:text-[1.8vh]" />
                    {job.jobtype}
                  </p>
                  <p className="text-[1vw] text-zinc-600 flex items-center gap-2 mb-6 sm:text-[1.8vh]">
                    <PiMoneyLight className="text-[1.5vw] sm:text-[1.8vh]" />
                    {job.salary}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="bg-zinc-300 text-zinc-600 text-[.8vw] px-[.5vmax] py-[.2vmax] rounded-md sm:text-[1.8vh]">
                      Job
                    </p>
                    <button className="flex items-center text-[#006BC2] text-[1vw] sm:text-[1.8vh]">
                      <Link to={`/employee/job/read/${job._id}`}>
                        View Details
                      </Link>
                      <span className="ml-2 w-2">{">"}</span>
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Empreadalljobs;
