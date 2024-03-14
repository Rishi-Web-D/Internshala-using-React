import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: null,
  isAuth: false,
  error: null,
  internship: null,
  internships: [],
  jobs: [],
  job: {},
  student: null,
};

export const employeeSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveError: (state, action) => {
      state.error = action.payload;
      console.log(state.error);
    },
    saveEmployee: (state, action) => {
      state.employee = action.payload;
      state.isAuth = true;
      console.log("Saveing in state ", state.employee);
    },
    removeUser: (state, action) => {
      state.employee = null;
      state.isAuth = false;
    },
    setInternships: (state, action) => {
      state.isAuth = true;
      state.internships = action.payload;
      console.log(state.internships);
    },
    setSingleInternship: (state, action) => {
      state.isAuth = true;
      state.internship = action.payload;
      console.log(state.internship);
    },
    setSingleJob: (state, action) => {
      state.isAuth = true;
      state.job = action.payload;
      console.log(state.job);
    },
    setJobs: (state, action) => {
      state.isAuth = true;
      state.jobs = action.payload;
      console.log(state.jobs);
    },
    setStudent: (state, action) => {
      state.isAuth = true;
      state.student = action.payload;
      console.log(state.student);
    },
  },
});

export const {
  saveError,
  saveEmployee,
  removeUser,
  setInternships,
  setSingleInternship,
  setJobs,
  setSingleJob,
  setStudent,
} = employeeSlice.actions;

export default employeeSlice.reducer;
