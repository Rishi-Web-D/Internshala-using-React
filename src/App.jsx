import { Route, Routes, useParams } from "react-router-dom";
import Home from "./components/Home";
import Studentsignup from "./components/Studentcomponents/Studentsignup";
import Studentsignin from "./components/Studentcomponents/Studentsignin";
import Studentdashboard from "./components/Studentcomponents/Studentdashboard";
import Studentprofile from "./components/Studentcomponents/Studentprofile";
import Updatestudent from "./components/Studentcomponents/Updatestudent";
import Resetpass from "./components/Studentcomponents/Resetpass";
import Changepass from "./components/Studentcomponents/Changepass";
import StudentForgetpass from "./components/Studentcomponents/StudentForgetpass";
import Employeesignup from "./components/EmployeeComponent/Employeesignup";
import Employeesignin from "./components/EmployeeComponent/Employeesignin";
import Employeedashboard from "./components/EmployeeComponent/Employeedashboard";
import Employeeprofile from "./components/EmployeeComponent/Employeeprofile";
import Employeesingleinternship from "./components/EmployeeComponent/Employeesingleinternship";
import Singleinternship from "./components/Internship/Singleinternship";
import Readallinternships from "./components/Internship/Readallinternships";
import Readalljobs from "./components/Jobs/Readalljobs";
import Singlejob from "./components/Jobs/Singlejob";
import Updateemployee from "./components/EmployeeComponent/Updateemployee";
import Empreadallinternships from "./components/EmployeeComponent/Empreadallinternships";
import Empcreateinternship from "./components/EmployeeComponent/Empcreateinternship";
import Empreadalljobs from "./components/EmployeeComponent/Empreadalljobs";
import Empcreatejob from "./components/EmployeeComponent/Empcreatejob";
import Employeesinglejob from "./components/EmployeeComponent/Employeesinglejob";
import Empresetpass from "./components/EmployeeComponent/Empresetpass";
import Empstudentdetail from "./components/EmployeeComponent/Empstudentdetail";
const App = () => {
  return (
    <div className="h-full w-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        //----------------------------STUDENT
        ROUTES----------------------------------//
        <Route path="/user/student/signup" element={<Studentsignup />} />
        <Route path="/user/student/signin" element={<Studentsignin />} />
        <Route path="/user/student" element={<Studentdashboard />} />
        <Route path="/user/student/profile" element={<Studentprofile />} />
        <Route path="/user/student/update/:id" element={<Updatestudent />} />
        <Route path="/user/student/send-mail" element={<StudentForgetpass />} />
        <Route
          path="/user/student/reset-password/:id"
          element={<Resetpass />}
        />
        <Route
          path="/user/student/forget-link/:studentid"
          element={<Changepass />}
        />
        //----------------------------INTERNSHIP
        ROUTES---------------------------------//
        <Route
          path="/user/internship/readAll"
          element={<Readallinternships />}
        />
        <Route
          path="/user/internship/read/:id"
          element={<Singleinternship />}
        />
        //----------------------------JOB
        ROUTES----------------------------------------//
        <Route path="/user/job/readAll" element={<Readalljobs />} />
        <Route path="/user/job/read/:id" element={<Singlejob />} />
        //----------------------------EMPLOYEE
        ROUTES-----------------------------------//
        <Route path="/employee/signup" element={<Employeesignup />} />
        <Route path="/employee/signin" element={<Employeesignin />} />
        <Route path="/employee/dashboard" element={<Employeedashboard />} />
        <Route path="/employee/profile" element={<Employeeprofile />} />
        <Route path="/employee/update/:id" element={<Updateemployee />} />
        <Route
          path="/employee/internship/readAll"
          element={<Empreadallinternships />}
        />
        <Route
          path="/employee/internship/create"
          element={<Empcreateinternship />}
        />
        <Route
          path="/employee/internship/read/:id"
          element={<Employeesingleinternship />}
        />
        <Route path="/employee/job/readAll" element={<Empreadalljobs />} />
        <Route path="/employee/job/create" element={<Empcreatejob />} />
        <Route path="/employee/job/read/:id" element={<Employeesinglejob />} />
        <Route
          path="/employee/reset-password/:id"
          element={<Empresetpass />}
        />
        <Route
          path="/employee/view/student/:id"
          element={<Empstudentdetail />}
        />

      </Routes>
    </div>
  );
};

export default App;
