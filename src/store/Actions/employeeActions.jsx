import {
  saveEmployee,
  removeUser,
  setSingleInternship,
  setInternships,
  setJobs,
  setSingleJob,
  setStudent,
} from "../Reducers/employeeSlice";
import axios from "../../config/axios";
import { Navigate } from "react-router-dom";
import { LogIn } from "lucide-react";

export const asyncemployeesignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/employee/signin", user);
    console.log("Sending employee details", user);
    dispatch(asynccurrentEmployee());
  } catch (error) {
    console.log(error.response.data);
  }
};
export const asynccurrentEmployee = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employee/current");
    dispatch(saveEmployee(data.employee));
    console.log("employee actions ", data);
  } catch (error) {
    console.log(error.response.data);
  }
};
export const asyncupdateEmployee = (id, user) => async (dispatch, getState) => {
  try {
    await axios.post(`/employee/update/${id}`, user);
    dispatch(asynccurrentEmployee());
  } catch (error) {
    console.log(error.response.data);
  }
};
export const asynccallSingleInternship = (id) => async (dispatch, getState) => {
  try {
    try {
      console.log(id);
      const { data } = await axios.post(`/employee/internship/read/${id}`);
      console.log(data);
      dispatch(setSingleInternship(data.internship));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
export const asyncallInternshipEmp = () => async (dispatch, getState) => {
  try {
    try {
      const data = await axios.post("/employee/internship/read");
      console.log(data.data);
      dispatch(setInternships(data.data.internships));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
export const asyncUploadInternship =
  (newinternship) => async (dispatch, getState) => {
    try {
      const data = await axios.post(
        "/employee/internship/create",
        newinternship
      );
      dispatch(asynccurrentEmployee());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncUploadJob = (newjob) => async (dispatch, getState) => {
  try {
    const data = await axios.post("/employee/job/create", newjob);
    dispatch(asynccurrentEmployee());
  } catch (error) {
    console.log(error.response.data);
  }
};
export const asyncallSingleJob = (id) => async (dispatch, getState) => {
  try {
    try {
      const data = await axios.post(`/employee/job/read/${id}`);
      console.log("asdas", data.data);
      dispatch(setSingleJob(data.data.job));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
export const asyncgetstudent = (id) => async (dispatch, getState) => {
  try {
    try {
      const data = await axios.post(`/employee/student/read/${id}`);
      console.log("asdas", data.data);
      dispatch(setStudent(data.data.student));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};

export const asynCallEmpJob = () => async (dispatch, getState) => {
  try {
    try {
      const data = await axios.post("/employee/job/read");
      console.log(data.data);
      dispatch(setJobs(data.data.jobs));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    await axios.get("/employee/signout");
    dispatch(removeUser());
    // Navigate("/");
  } catch (error) {
    console.log(error.response.data);
  }
};
export const asyncemployeesignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/employee/signup", user);
    dispatch(asynccurrentEmployee());
  } catch (error) {
    console.log(error.response.data);
  }
};
export const asyncresetEmppass =
  (id, password) => async (dispatch, getState) => {
    try {
      try {
        const data = await axios.post(`/employee/reset-password/${id}`, {
          password,
        });
        console.log(data);
      } catch (error) {
        console.log(error.response.data);
      }
    } catch (error) {}
  };
