import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { TbMathGreater } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
import { asynCallEmpJob } from "../../store/Actions/employeeActions";

const Empalljob = () => {
  const { jobs, employee } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  if (!jobs) {
    dispatch(asynCallEmpJob());
  }
  useEffect(() => {
    dispatch(asynCallEmpJob());
  }, [dispatch]);
  return (
    <div className=" bg-[#F0FBFF] px-[1vw] min-h-full py-4 pb-20 font-[inter] max-w-full">
      <h1 className="text-2xl text-center mb-2 font-semibold text-zinc-800">
        Uploaded Jobs
      </h1>

      <div className="flex overflow-x-scroll gap-5  px-3 py-5">
        {!jobs
          ? "Unable to load jobs"
          : jobs.map((job) => (
              <div
                key={job._id}
                className="shadow-[10px_10px_50px_10px_rgba(0,0,0,0.15)] min-w-[25vw] h-[15vw] bg-white px-5 py-3 rounded-xl font-[inter] font-semibold sm:min-w-[100%] sm:h-[32vh]"
              >
                <h1 className="text-[1.7vw] text-zinc-800 mb-1 sm:text-[2.5vh]">
                  {job.tittle}
                </h1>
                <p className="text-[1.2vw] text-zinc-600 mb-2 sm:text-[2vh]">
                  {job.companyname}
                </p>
                <hr />
                <p className=" text-[1vw] text-zinc-600 flex items-center gap-2 mt-2 mb-1 sm:text-[2.5vh]">
                  <CiLocationOn className="text-[1.5vw] sm:text-[2.5vh]" />
                  {job.jobtype}
                </p>
                <p className="text-[1vw] text-zinc-600 flex items-center gap-2 mb-6 sm:text-[2.5vh]">
                  <PiMoneyLight className="text-[1.5vw] sm:text-[2.5vh]" />
                  {job.salary}
                </p>
                <div className="flex justify-between items-center">
                  <p className="bg-zinc-300 text-zinc-600 sm:text-[2vh] text-[.8vw] px-[.5vmax] py-[.2vmax] rounded-md ">
                    Job
                  </p>
                  <button className="flex items-center text-[#006BC2] text-[1vw] sm:text-[2vh]">
                    <Link to={`/employee/job/read/${job._id}`}>
                      View Details
                    </Link>
                    <span className="ml-2 w-2">{">"}</span>
                  </button>
                </div>
              </div>
            ))}
      </div>
      <div className="flex w-full justify-end">
        Slide
        <ChevronsRight />
      </div>
    </div>
  );
};

export default Empalljob;
