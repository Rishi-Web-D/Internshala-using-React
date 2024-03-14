import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncallInternship,
  asynccurrentUser,
} from "../../store/Actions/userActions";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import Studentnav from "../Studentcomponents/Studentnav";
import Footer from "../Footer/Footer";

const Readallinternships = () => {
  const { internships, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentUser());
    dispatch(asyncallInternship());
  }, [dispatch]);

  console.log(internships, user);
  return (
    <>
      {!user ? <h1>User not available </h1> : <Studentnav />}
      <div className=" bg-[#F0FBFF] px-[8vw]  py-4 font-[inter] w-screen min-h-screen">
        <h1 className="text-2xl sm:text-3xl text-center mb-2 font-semibold text-zinc-800">
          Internships for you
        </h1>
        <p className="text-md text-center mb-10 font-normal text-zinc-800">
          as per your{" "}
          <span className="text-[#006BC2] font-bold"> preferences</span>
        </p>
        <div className="grid grid-cols-3  gap-[2vw] sm:flex  sm:flex-col sm:gap-5">
          {!internships[0]
            ? "Unable to load internships"
            : internships.map((internship) => (
                <div
                  key={internship._id}
                  className="sm:min-w-[100%] sm:h-[26vh] w-[25vw] h-[15vw] bg-white px-5 py-3 rounded-xl font-[inter] font-semibold"
                >
                  <h1 className="text-[1.7vw] text-zinc-800 mb-1 sm:text-[2.5vh] sm:mb-0">
                    {internship.profile}
                  </h1>
                  <p className="text-[1.2vw] text-zinc-600 mb-2 sm:text-[2vh]">
                    {internship.companyname}
                  </p>
                  <hr />
                  <p className=" text-[1vw] text-zinc-600 flex items-center gap-2 mt-2 mb-1 sm:text-[1.8vh]">
                    <CiLocationOn className="text-[1.5vw] sm:text-[1.8vh]" />
                    {internship.internshiptype}
                  </p>
                  <p className="text-[1vw] text-zinc-600 flex items-center gap-2 mb-6 sm:text-[1.8vh]">
                    <PiMoneyLight className="text-[1.5vw] sm:text-[1.8vh]" />
                    {internship.stipend.status} {internship.stipend.amount}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="bg-zinc-300 text-zinc-600 text-[.8vw] px-[.5vmax] py-[.2vmax] rounded-md sm:text-[1.8vh] ">
                      Internship
                    </p>
                    <button className="flex items-center text-[#006BC2] text-[1vw] sm:text-[1.8vh]">
                      <Link to={`/user/internship/read/${internship._id}`}>
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

export default Readallinternships;
