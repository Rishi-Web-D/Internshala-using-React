import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  asynccurrentEmployee,
  asyncupdateEmployee,
} from "../../store/Actions/employeeActions";
import Employeenav from "./Employeenav";
import { useDispatch, useSelector } from "react-redux";

const Updateemployee = () => {
  const { id } = useParams();
  useEffect(() => {
    dispatch(asynccurrentEmployee());
  }, []);
  const { employee } = useSelector((state) => state.employee);

  const dispatch = useDispatch();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [city, setcity] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [organizationname, setorganizationname] = useState("");
  const navigate = useNavigate();
  const updateUser = () => {
    const newuser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      contact: contact,
      city: city,
      password: password,
      gender: gender,
      organizationname: organizationname,
    };
    dispatch(asyncupdateEmployee(id, newuser));
    navigate("/employee/profile");
  };

  return (
    <>
      <Employeenav />
      <div className="min-h-screen w-screen  flex justify-center  sm:min-h-fit">
        <div className="thisform w-[35vw] mt-4 sm:w-full text-center  sm:mt-0">
          <h1 className="text-[2.5vw] w-96 font-extrabold mb-2 text-zinc-700 m-auto py-2 sm:text-[3vh] sm:pr-7 ">
            Update your details
          </h1>
          <input
            className="w-96  h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400 sm:w-64"
            type="text"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            placeholder="Enter firstname"
          />
          {}
          <br />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setlastname(e.target.value)}
            placeholder="Enter lastname"
          />{" "}
          <br />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter email"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setcontact(e.target.value)}
            placeholder="Enter contact"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setcity(e.target.value)}
            placeholder="Enter city"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter password"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setgender(e.target.value)}
            placeholder="Enter gender"
          />
          <input
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400"
            type="text"
            onChange={(e) => setorganizationname(e.target.value)}
            placeholder="Enter organization name"
          />
          <button
            className="w-96 sm:w-64 h-10 rounded mt-4 px-3 py-2 border-[1.1px] border-zinc-400 bg-[#00A5EC] text-white"
            onClick={updateUser}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Updateemployee;
