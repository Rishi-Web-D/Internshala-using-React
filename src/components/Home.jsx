import Nav from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer/Footer";
import img1 from "../assets/sta_launch_mar24-student.png.webp";
import img2 from "../assets/britannia_1_day-student.png.webp";
import img3 from "../assets/part_time_pocket_money_feb24-student.png.webp";
import logo1 from "../assets/logos/amazon.png";
import logo2 from "../assets/logos/download.png";
import logo3 from "../assets/logos/show.png";
import logo4 from "../assets/logos/sony.png";
import logo5 from "../assets/logos/Paytm-Logo.wine.png";
const Home = () => {
  const notify = () => toast("Wow so easy !");
  return (
    <>
      <Nav />
      <div className="upperheading mt-[18vh] text-center sm:mt-[14vh] ">
        <h1 className="text-[7vh] font-[inter] text-zinc-700  font-bold sm:text-[5vh]">
          Make your dream career a reality
        </h1>
        <span className="align-super inline-block">
          <img
            className="h-6 sm:w-[25vh]"
            src="https://internshala.com/static/images/registration/student_new/underline_d.svg"
            alt=""
          />
        </span>
        <p className="text-[4vh] font-[inter] font-bold text-zinc-800 sm:text-[3.5vh]">
          Trending on Internshala 🔥
        </p>
      </div>
      <div className="images py-5 flex px-5 justify-between mt-5 sm:flex-col sm:gap-5">
        <img src={img1} alt="" className="w-[400px]" />
        <img src={img2} alt="" className="w-[400px]" />
        <img src={img3} alt="" className="w-[400px]" />
      </div>
      <div className=" text-2xl flex justify-center items-center  flex-col text-center m-16 ">
        <h1 className="text-4xl font-bold text-zinc-700 sm:text-[5vh]  w-full text-wrap">
          SIGNUP TO EXPLORE MORE
        </h1>
        <button
          className="mt-5 bg-zinc-200 text-zinc-600 rounded-lg px-4 py-2"
          onClick={notify}
        >
          Notify!
        </button>
      </div>
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

      <ToastContainer />
      <Footer />
    </>
  );
};

export default Home;
