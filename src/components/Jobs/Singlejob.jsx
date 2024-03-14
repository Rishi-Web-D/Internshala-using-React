import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  asyncallSingleJob,
  asynccurrentUser,
} from "../../store/Actions/userActions";
import { asyncapplyjob } from "../../store/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlinePlayCircle } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Studentnav from "../Studentcomponents/Studentnav";

const Singlejob = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentUser());
    dispatch(asyncallSingleJob(id));
  }, [dispatch]);
  const { job, user } = useSelector((state) => state.user);
  console.log(job, user);

  const applyjob = () => {
    dispatch(asyncapplyjob(user, id));
    navigate("/user/job/readAll");
  };

  return (
    <div>
      {!job.tittle ? (
        "Unable to load this job"
      ) : (
        <>
          {!user ? <h1>User not available </h1> : <Studentnav />}
          <div className="font-['inter']  w-full h-full  py-5 overflow-hidden">
            <h1 className="text-3xl text-center text-zinc-800 font-semibold mb-5 font-['Gilroy']">
              {job.tittle} Job ({job.jobtype})
            </h1>

            <div className="Details border-2 w-[80%] font-medium   m-auto  rounded px-10  py-12">
              <h2 className="text-lg font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-800 mb-1">
                {job.tittle}
              </h2>
              <p className=" text-zinc-600 mb-1">{job.companyname}</p>
              <p className="font-normal mb-2">{job.jobtype}</p>
              <hr />
              <div className="infodivtext-zinc-700 flex justify-between mt-4 sm:flex-col sm:gap-3">
                <div className="start px-1 py-1">
                  <p className="flex items-center tracking-wider gap-1">
                    <MdOutlinePlayCircle />
                    START DATE
                  </p>
                  <p className="text-zinc-800">Immediate</p>
                </div>
                <div className="duration px-1 py-1 ">
                  <p className="flex items-center tracking-wider gap-1">
                    <CiCalendar />
                    PREFERENCES
                  </p>
                  <p className="text-zinc-800">{job.preferences}</p>
                </div>
                <div className="stipend px-1 py-1">
                  <p className="flex items-center tracking-wider gap-1">
                    <PiMoneyLight />
                    SALARY
                  </p>
                  <p className="text-zinc-800 flex items-center  mt-3 mb-3">
                    <MdCurrencyRupee className="text-zinc-700 " />
                    {job.salary}/month
                  </p>
                </div>
              </div>
              <hr />
              <div className="Responsibility  mt-4 mb-4">
                <p className="mb-2">About the work from home job/job</p>
                <ul className="text-sm text-zinc-700  ">
                  <li>{job.description}</li>
                </ul>
              </div>
              <hr />
              <div className="Skills  mt-4 mb-4">
                <p className="mb-2">Skill(s) required</p>
                <p className="text-sm text-zinc-700">{job.skill}</p>
              </div>
              <hr />
              <div className="assign  mt-4 mb-4">
                <p className="mb-2">Who can apply</p>
                <p className="text-sm text-zinc-700">
                  Can work with {job.assesments}
                </p>
              </div>
              <hr />
              <div className="Perks  mt-4 mb-4">
                <p className="mb-2">Perks</p>
                <p className="text-sm text-zinc-700">{job.perkes}</p>
              </div>
              <hr />
              <div className="openings  mt-4 mb-4">
                <p className="mb-2">Number of openings</p>
                <p className="text-sm text-zinc-700">{job.openings}</p>
              </div>
              <hr />
              <div className=" mt-16 mb-3  flex justify-center">
                <button
                  className="px-4 py-3   bg-[#00A5EC] text-base align-middle text-white rounded "
                  onClick={() => applyjob()}
                >
                  Apply now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Singlejob;
