import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

//the configureStore generally takes an object
export const store = configureStore({
  reducer: todoReducer,
});
