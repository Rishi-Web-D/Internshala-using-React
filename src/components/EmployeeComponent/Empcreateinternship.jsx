import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncUploadInternship,
  asynccurrentEmployee,
  asyncupdateEmployee,
} from "../../store/Actions/employeeActions";
import Employeenav from "./Employeenav";
import { useDispatch, useSelector } from "react-redux";

const Empcreateinternship = () => {
  const { employee } = useSelector((state) => state.employee);
  useEffect(() => {
    dispatch(asynccurrentEmployee());
  }, []);

  const dispatch = useDispatch();
  const [profile, setprofile] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [skill, setskill] = useState("");
  const [internshiptype, setinternshiptype] = useState("");
  const [openings, setopenings] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [duration, setduration] = useState("");
  const [responsibility, setresponsibility] = useState("");
  const [stipend, setstipend] = useState({ status: "", amount: null });
  const [perkes, setperkes] = useState("");
  const [assesments, setassesments] = useState("");
  const navigate = useNavigate();
  const Uploadinternship = () => {
    const newinternship = {
      profile: profile,
      companyname: companyname,
      skill: skill,
      internshiptype: internshiptype,
      openings: openings,
      from: from,
      to: to,
      duration: duration,
      responsibility: responsibility,
      stipend: stipend,
      perkes: perkes,
      assesments: assesments,
    };
    dispatch(asyncUploadInternship(newinternship));
    navigate("/employee/dashboard");
  };

  return (
    <>
      <Employeenav />
      <div className="min-h-screen w-screen  flex justify-center  sm:min-h-fit">
        <div className="thisform w-[35vw] mt-4 sm:w-full text-center  sm:mt-0">
          <h1 className="text-[2.5vw] w-96 font-extrabold mb-2 text-zinc-700 m-auto py-2 sm:text-[3vh] sm:pr-7 ">
            Enter Internship details
          </h1>
          <input
            className="w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400 sm:w-64"
            type="text"
            onChange={(e) => setprofile(e.target.value)}
            placeholder="Enter Profile"
          />
          {}
          <br />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setcompanyname(e.target.value)}
            placeholder="Enter Companyname"
          />{" "}
          <br />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setskill(e.target.value)}
            placeholder="Enter Skill Required"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            required
            onChange={(e) => setinternshiptype(e.target.value)}
            placeholder="Enter Internship type (In Office / Remote / Work From Home)"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            required
            onChange={(e) => setopenings(e.target.value)}
            placeholder="Enter Openings"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setfrom(e.target.value)}
            placeholder="Enter Starting date"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setto(e.target.value)}
            placeholder="Enter Ending date"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setduration(e.target.value)}
            placeholder="Enter Duration"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setresponsibility(e.target.value)}
            placeholder="Enter Responsibility"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            required
            onChange={(e) => setstipend({ status: e.target.value })}
            placeholder="Enter Stipend Status Fixed/Negotiable/Performance based/Unpaid"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            required
            onChange={(e) => setstipend({ amount: e.target.value })}
            placeholder="Enter Stipend Amount"
          />
          
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setperkes(e.target.value)}
            placeholder="Enter Perkes"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setassesments(e.target.value)}
            placeholder="Enter Assesments"
          />
          <button
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400 bg-[#00A5EC] text-white"
            onClick={Uploadinternship}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Empcreateinternship;
