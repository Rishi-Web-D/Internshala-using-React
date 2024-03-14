import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "../../store/Actions/userActions";
import Studentnav from "./Studentnav";
import Internship from "../Internship/Internship";
import Job from "../Jobs/Job";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/aditya_birla_capital-student.png.webp";
import img2 from "../../assets/int_opps-student.png.webp";
import img3 from "../../assets/isp_41-student.png.webp";

const Dashboard = (res) => {
  const navigate = useNavigate();
  const { user, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // if (error.) {
  //   navigate("/user/student/signin");
  // }
  useEffect(() => {
    dispatch(asynccurrentUser());
  }, []);
  return user ? (
    <div className=" max-w-[100vw] ">
      <Studentnav />
      <div className="main mt-5">
        <div className="text w-full py-4 text-center mb-5">
          <h1 className="text-3xl font-semibold text-zinc-800 font-[Gilroy] mb-8 tracking-wider">
            Hi, {user && user.firstname}!👋
          </h1>
          <p className="font-normal text-2xl text-zinc-600">
            Let’s help you land your dream career
          </p>
        </div>
        <div className="images py-5 flex px-5 justify-between mt-5 sm:flex-col sm:gap-5">
          <img src={img1} alt="" className="w-[400px]" />
          <img src={img2} alt="" className="w-[400px]" />
          <img src={img3} alt="" className="w-[400px]" />
        </div>
        <Internship />
        <Job />
        <Footer />
      </div>
    </div>
  ) : (
    <h1 className="text-3xl font-semibold text-zinc-800 font-[Gilroy] mb-4 tracking-wider">
      Loading...
    </h1>
  );
};

export default Dashboard;
