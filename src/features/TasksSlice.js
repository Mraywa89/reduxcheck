import { createSlice } from "@reduxjs/toolkit";

export const TasksSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, task } = action.payload;
      console.log(id, task);
      const index = state.findIndex((todo) => todo.id === id);
      console.log(index);
      if (index !== -1) {
        state[index].id = task.id;
        state[index].description = task.description;
        state[index].done = task.done;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = TasksSlice.actions;

export default TasksSlice.reducer;
