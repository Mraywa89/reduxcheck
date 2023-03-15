import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/TasksSlice";

const Addtask = () => {
  const [id, setid] = useState("");
  const [description, setdescription] = useState("");
  const [done, setdone] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    dispatch(addTask({ id, description, done }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setid(e.target.value)} />
        <input type="text" onChange={(e) => setdescription(e.target.value)} />
        <input type="text" onChange={(e) => setdone(e.target.value)} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Addtask;
