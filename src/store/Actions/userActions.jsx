import {
  saveStudent,
  saveError,
  removeUser,
  getInternships,
  getSingleInternships,
  getJobs,
  getSingleJob,
} from "../Reducers/userSlice";
import axios from "../../config/axios";
export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user/student/signin", user);
    console.log("login response >>>> ", data);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};
export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user/student");
    // console.log(data.student);
    dispatch(saveStudent(data.student));
  } catch (error) {
    console.log(error.response.data);
    dispatch(saveError(error.response.data));
  }
};

export const asyncstudentsignup = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user/student/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};
export const asyncUpdateuser = (id, user) => async (dispatch, getState) => {
  try {
    await axios.post(`/user/student/update/${id}`, user);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    await axios.get("/employee/signout");
    dispatch(removeUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncallInternship = () => async (dispatch, getState) => {
  try {
    try {
      const data = await axios.post("/user/internship/read");
      console.log(data.data);
      dispatch(getInternships(data.data.internships));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
export const asyncallSingleInternship = (id) => async (dispatch, getState) => {
  try {
    try {
      console.log(id);
      const data = await axios.post(`/user/internship/read/${id}`);
      console.log(data.data.internship);
      dispatch(getSingleInternships(data.data.internship));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
export const asyncapplyinternship =
  (user, id) => async (dispatch, getState) => {
    try {
      try {
        console.log(user);
        const data = await axios.post(`/user/student/apply/internship/${id}`, {
          user,
        });
      } catch (error) {
        console.log(error.response.data);
      }
    } catch (error) {}
  };
export const asyncresetpass = (id, password) => async (dispatch, getState) => {
  try {
    try {
      console.log(id);
      const data = await axios.post(`/user/student/reset-password/${id}`, {
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
export const asyncforgotpass = (email) => async (dispatch, getState) => {
  try {
    try {
      console.log(email);
      const data = await axios.post(`/user/student/send-mail`, {
        email,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
export const asyncChangepass =
  (studentid, password) => async (dispatch, getState) => {
    try {
      try {
        const data = await axios.post(
          `/user/student/forget-link/${studentid}`,
          {
            password,
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error.response.data);
      }
    } catch (error) {}
  };
//-----------------------job-------------------//
export const asyncallJob = () => async (dispatch, getState) => {
  try {
    try {
      const data = await axios.post("/user/job/read");
      console.log(data.data);
      dispatch(getJobs(data.data.jobs));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};

export const asyncallSingleJob = (id) => async (dispatch, getState) => {
  try {
    try {
      const data = await axios.post(`/user/job/read/${id}`);
      console.log(data.data.jobs);
      dispatch(getSingleJob(data.data.jobs));
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
export const asyncapplyjob = (user, id) => async (dispatch, getState) => {
  try {
    try {
      console.log(user);
      const data = await axios.post(`/user/student/apply/job/${id}`, {
        user,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  } catch (error) {}
};
