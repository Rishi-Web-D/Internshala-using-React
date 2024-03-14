import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlinePlayCircle } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  asynccallSingleInternship,
  asynccurrentEmployee,
} from "../../store/Actions/employeeActions";
import Employeenav from "./Employeenav";
const Employeesingleinternship = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentEmployee());
    dispatch(asynccallSingleInternship(id));
  }, []);
  const { internship, employee } = useSelector((state) => state.employee);
  if (internship === null) {
    dispatch(asynccallSingleInternship(id));
  }
  console.log(internship, employee);
  return (
    <div>
      {!internship ? (
        "Unable to load this internship"
      ) : (
        <>
          {!employee ? <h1>Employee not available </h1> : <Employeenav />}
          <div className="font-['inter']  w-full h-full  py-5 overflow-hidden">
            <h1 className="text-3xl text-center text-zinc-800 font-semibold mb-5 font-['Gilroy']">
              {internship.profile} Intern ({internship.internshiptype})
            </h1>

            <div className="Details border-2 w-[80%] font-medium   m-auto  rounded px-10  py-12">
              <h2 className="text-lg font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-800 mb-1">
                {internship.profile}
              </h2>
              <p className=" text-zinc-600 mb-1">{internship.companyname}</p>
              <p className="font-normal mb-2">{internship.internshiptype}</p>
              <hr />
              <div className="infodiv text-zinc-700 flex justify-between mt-4 sm:flex-col sm:gap-3">
                <div className="start px-1 py-1">
                  <p className="flex items-center tracking-wider gap-1">
                    <MdOutlinePlayCircle />
                    START DATE
                  </p>
                  <p className="text-zinc-800">{internship.from}</p>
                </div>
                <div className="duration px-1 py-1 ">
                  <p className="flex items-center tracking-wider gap-1">
                    <CiCalendar />
                    DURATION
                  </p>
                  <p className="text-zinc-800">{internship.duration}</p>
                </div>
                <div className="stipend px-1 py-1">
                  <p className="flex items-center tracking-wider gap-1">
                    <PiMoneyLight />
                    STIPEND
                  </p>
                  <p className="text-zinc-800 flex items-center  mt-3 mb-3">
                    <MdCurrencyRupee className="text-zinc-700 " />
                    {internship.stipend.amount}/month
                  </p>
                </div>
              </div>
              <hr />
              <div className="Responsibility  mt-4 mb-4">
                <p className="mb-2">About the work from home job/internship</p>
                <ul className="text-sm text-zinc-700  ">
                  <li>{internship.responsibility}</li>
                </ul>
              </div>
              <hr />
              <div className="Skills  mt-4 mb-4">
                <p className="mb-2">Skill(s) required</p>
                <p className="text-sm text-zinc-700">{internship.skill}</p>
              </div>
              <hr />
              <div className="assign  mt-4 mb-4">
                <p className="mb-2">Who can apply</p>
                <p className="text-sm text-zinc-700">
                  Can work with {internship.assesments}
                </p>
              </div>
              <hr />
              <div className="Perks  mt-4 mb-4">
                <p className="mb-2">Perks</p>
                <p className="text-sm text-zinc-700">{internship.perkes}</p>
              </div>
              <hr />
              <div className="openings  mt-4 mb-4">
                <p className="mb-2">Number of openings</p>
                <p className="text-sm text-zinc-700">{internship.openings}</p>
              </div>
              <div className="Student  mt-4 mb-4">
                <p className="mb-2">Students Who applied </p>
                <div className="text-sm text-zinc-700">
                  {internship.students.length == 0 ? (
                    <h1>No one Applied</h1>
                  ) : (
                    internship.students.map((stu, index) => {
                      return (
                        <div key={index} className="grid grid-cols-2 ">
                          <Link
                            to={`/employee/view/student/${stu}`}
                            className="text-[#40B8ED] underline"
                          >
                            {index}. View Details
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
              <hr />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Employeesingleinternship;
