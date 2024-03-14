import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncallInternship } from "../../store/Actions/userActions";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import { ChevronsRight } from "lucide-react";

const Internship = () => {
  const { internships, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (!internships) {
    dispatch(asyncallInternship());
  }
  useEffect(() => {
    dispatch(asyncallInternship());
  }, [dispatch]);
  console.log(internships, user);
  return (
    <div className=" bg-[#F0FBFF] px-[1vw]  py-10 font-[inter] w-screen">
      <h1 className="text-2xl text-center mb-2 font-semibold text-zinc-800 sm:px-5">
        Recommended Internships for you
      </h1>
      <p className="text-md text-center mb-10 font-normal text-zinc-800">
        as per your{" "}
        <span className="text-[#006BC2] font-bold"> preferences</span>
      </p>
      <div className=" flex overflow-x-scroll gap-5  px-3 py-5 ">
        {!internships
          ? "Unable to load internships"
          : internships.map((internship) => (
              <div
                key={internship._id}
                className="shadow-[10px_10px_50px_10px_rgba(0,0,0,0.15)] min-w-[25vw] h-[15vw] bg-white px-5 py-3 rounded-xl font-[inter] font-semibold sm:min-w-[100%] sm:h-[32vh]"
              >
                <h1 className="text-[1.7vw] text-zinc-800 mb-1 sm:text-[2.5vh]">
                  {internship.profile}
                </h1>
                <p className="text-[1.2vw] text-zinc-600 mb-2 sm:text-[2vh]">
                  {internship.companyname}
                </p>
                <hr className="sm:h-2" />
                <p className=" text-[1vw] text-zinc-600 flex items-center gap-2 mt-2 mb-1 sm:text-[2.5vh]">
                  <CiLocationOn className="text-[1.5vw] sm:text-[2.5vh]" />
                  {internship.internshiptype}
                </p>
                <p className="text-[1vw] text-zinc-600 flex items-center gap-2 mb-6 sm:text-[2.5vh]">
                  <PiMoneyLight className="text-[1.5vw] sm:text-[2.5vh]" />
                  {internship.stipend.status} {internship.stipend.amount}
                </p>
                <div className="flex justify-between items-center">
                  <p className="bg-zinc-300 text-zinc-600 text-[.8vw] px-[.5vmax] py-[.2vmax] rounded-md sm:text-[1.7vh]  ">
                    Internship
                  </p>
                  <button className="flex items-center text-[#006BC2] text-[1vw] sm:text-[2vh]">
                    <Link to={`/user/internship/read/${internship._id}`}>
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

export default Internship;
