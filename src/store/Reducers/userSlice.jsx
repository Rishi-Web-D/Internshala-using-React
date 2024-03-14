import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  error: null,
  internship: null,
  internships:[],
  jobs: [],
  job: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveStudent: (state, action) => {
      state.user = action.payload;
      console.log("Showing user in slice of savereducer", state.user);
      state.isAuth = true;
    },
    saveError: (state, action) => {
      state.error = action.payload;
      console.log(state.error);
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuth = false;
    },
    getInternships: (state, action) => {
      state.isAuth = true;
      state.internships = action.payload;
      console.log(state.internships);
    },
    getSingleInternships: (state, action) => {
      state.isAuth = true;
      state.internship = action.payload;
      console.log(state.internship);
    },
    getSingleJob: (state, action) => {
      state.isAuth = true;
      state.job = action.payload;
      console.log(state.job);
    },
    getJobs: (state, action) => {
      state.isAuth = true;
      state.jobs = action.payload;
      console.log(state.jobs);
    },
  },
});

export const {
  saveStudent,
  saveError,
  saveEmployee,
  removeUser,
  getInternships,
  getSingleInternships,
  getJobs,
  getSingleJob,
} = userSlice.actions;

export default userSlice.reducer;
