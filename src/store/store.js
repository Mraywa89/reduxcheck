import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "../features/TasksSlice";

export const store = configureStore({
  reducer: {
    tasks: TasksReducer,
  },
});
