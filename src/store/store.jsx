import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import employeeReducer from "./Reducers/employeeSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    employee: employeeReducer,
  },
});
