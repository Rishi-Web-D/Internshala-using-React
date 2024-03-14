import React, { useEffect } from "react";
import Studentnav from "./Studentnav";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "../../store/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const Studentprofile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentUser());
  }, []);

  return !user ? (
    <h1>LOADING...</h1>
  ) : (
    <>
      <Studentnav />
      <div className="font-['inter']  w-full h-full  py-5 overflow-hidden">
        <div className="Details border-2 w-[80%] font-medium   m-auto  rounded px-10  py-12 sm:w-[90%]">
          <h1 className="text-4xl text-center text-zinc-800 font-semibold mb-5 font-['Gilroy'] flex items-center justify-between sm:text-left">
            {user.firstname} {user.lastname}
            <img
              className="w-20 h-20 rounded-2xl"
              src={user.avatar.url}
              alt=""
            />{" "}
          </h1>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Email : {user.email}
          </h2>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Phone : {user.contact}
          </h2>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Location : {user.city}
          </h2>
          <h2 className="text-md font-['Gilroy'] font-semibold tracking-widest blur-[.2px]  text-zinc-700 mb-1">
            Gender : {user.gender}
          </h2>

          <div className="Responsibility  mt-4 mb-4"></div>
          <hr />
          <div className="Internships  mt-4 mb-4">
            <p className="mb-2">Applied Internships</p>
            {user.internships.length === 0 && (
              <p className="text-sm text-zinc-700 h-10">
                Not applied for any Internships
              </p>
            )}
            {user.internships.map((internship, index) => {
              return (
                <p key={index} className="text-sm  h-10 flex ">
                  {index}.
                  <Link to={`/user/internship/read/${internship}`}>
                    <p className="text-blue-600 underline">View Details ,</p>
                  </Link>
                </p>
              );
            })}
          </div>
          <hr />
          <div className="jobs  mt-4 mb-4">
            <p className="mb-2">Applied Jobs</p>
            <div className="flex gap-2">
              {user.jobs.length === 0 && (
                <p className="text-sm text-zinc-700 h-10">
                  Not applied for any Job
                </p>
              )}
              {user.jobs.map((job, index) => {
                return (
                  <p key={index} className="text-sm  h-10 flex">
                    {index}.{" "}
                    <Link to={`/user/job/read/${job}`}>
                      {" "}
                      <p className="text-blue-600 underline"> View Details ,</p>
                    </Link>
                  </p>
                );
              })}
            </div>
          </div>

          <div className=" mt-16 mb-3  flex justify-center">
            <Link
              to={`/user/student/update/${user._id}`}
              className="px-4 py-3   bg-[#00A5EC] text-base align-middle text-white rounded "
            >
              UPDATE USER DETAILS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentprofile;
