import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/TasksSlice";

const Task = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>{props.id}</p>
      <p>{props.description}</p>
      <p>{props.isdone}</p>
      <button onClick={() => dispatch(deleteTask(props.id))}>delete</button>
      <button
        onClick={() =>
          dispatch(
            updateTask({
              id: props.id,
              task: { id: "444", description: "value", done: "ddd" },
            })
          )
        }
      >
        Edit
      </button>
    </>
  );
};

export default Task;
