import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { asyncUploadJob, asynccurrentEmployee } from "../../store/Actions/employeeActions";
import Employeenav from "./Employeenav";
import { useDispatch, useSelector } from "react-redux";

const Empcreatejob = () => {
  const { employee } = useSelector((state) => state.employee);
  useEffect(() => {
    dispatch(asynccurrentEmployee());
  }, []);

  const dispatch = useDispatch();
  const [companyname, setcompanyname] = useState("");
  const [tittle, settittle] = useState("");
  const [skill, setskill] = useState("");
  const [jobtype, setjobtype] = useState("");
  const [openings, setopenings] = useState("");
  const [description, setdescription] = useState("");
  const [preferences, setpreferences] = useState("");
  const [salary, setsalary] = useState("");
  const [perkes, setperkes] = useState("");
  const [assesments, setassesments] = useState("");
  const navigate = useNavigate();
  const Uploadjob = () => {
    const newjob = {
      tittle: tittle,
      companyname: companyname,
      skill: skill,
      jobtype: jobtype,
      openings: openings,
      description: description,
      preferences: preferences,
      salary: salary,
      perkes: perkes,
      assesments: assesments,
    };
    dispatch(asyncUploadJob(newjob));
    navigate("/employee/dashboard");
  };

  return (
    <>
      {!employee ? <h1>Loading nav...</h1> : <Employeenav />}
      <div className="min-h-screen w-screen  flex justify-center  sm:min-h-fit">
        <div className="thisform w-[35vw] mt-4 sm:w-full text-center  sm:mt-0">
          <h1 className="text-[2.5vw] w-96 font-extrabold mb-2 text-zinc-700 m-auto py-2 sm:text-[3vh] sm:pr-7 ">
            Enter Job details
          </h1>
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setcompanyname(e.target.value)}
            placeholder="Enter Companyname"
          />
          <br />
          <input
            className="w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400 sm:w-64"
            type="text"
            onChange={(e) => settittle(e.target.value)}
            placeholder="Enter Tittle "
          />
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
            onChange={(e) => setjobtype(e.target.value)}
            placeholder="Enter Job type (In Office / Remote)"
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
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter Description"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setpreferences(e.target.value)}
            placeholder="Enter Preferences"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            required
            onChange={(e) => setsalary(e.target.value)}
            placeholder="Enter Salary"
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
            onClick={Uploadjob}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Empcreatejob;
