import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asynccurrentEmployee,
  asyncremoveUser,
} from "../../store/Actions/employeeActions";
import { Link, useNavigate } from "react-router-dom";
import Employeenav from "./Employeenav";
import Footer from "../Footer/Footer";
import img1 from "../../assets/sta_launch_mar24-student.png.webp";
import img2 from "../../assets/britannia_1_day-student.png.webp";
import img3 from "../../assets/part_time_pocket_money_feb24-student.png.webp";
import logo1 from "../../assets/logos/amazon.png";
import logo2 from "../../assets/logos/download.png";
import logo3 from "../../assets/logos/show.png";
import logo4 from "../../assets/logos/sony.png";
import logo5 from "../../assets/logos/Paytm-Logo.wine.png";
import Empallintern from "./Empallintern";
import Empalljob from "./Empalljob";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { employee, isAuth } = useSelector((state) => state.employee);
  console.log(isAuth);

  useEffect(() => {
    dispatch(asynccurrentEmployee());
  }, []);
  return employee ? (
    <div>
      {employee ? <Employeenav /> : <h1>Loading...</h1>}
      <div className="main ">
        <div className="text w-full py-4 text-center ">
          <h1 className="text-3xl font-semibold text-zinc-800 font-[Gilroy] mb-4 tracking-wider">
            Hi, {employee.firstname}!👋
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
      </div>
      <Empallintern />
      <Empalljob />
      <div className="Collabcompany font-[inter]">
        <h1 className="text-[5vh] font-bold text-center m-5">
          Top companies trust us
        </h1>
        <div className="logos flex justify-between px-5 items-center py-10 sm:flex-col sm:gap-5">
          <img src={logo1} alt="" className="w-[15vmax] h-12 sm:w-[25vh]" />
          <img
            src={logo2}
            alt=""
            className="w-[10vmax] h-[10vmax] sm:w-[25vh]"
          />
          <img src={logo3} alt="" className="w-[15vmax] sm:w-[25vh]" />
          <img
            src={logo4}
            alt=""
            className="w-[15vmax] h-8 sm:w-[25vh] sm:h-[8vh]"
          />
          <img
            src={logo5}
            alt=""
            className="w-[15vmax] h-10 sm:w-[25vh] sm:h-[8vh] sm:mt-5"
          />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <h1 className="text-3xl font-semibold text-zinc-800 font-[Gilroy] mb-4 tracking-wider">
      Loading...
    </h1>
  );
};

export default Dashboard;
