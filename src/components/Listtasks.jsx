import React from "react";
import { useSelector } from "react-redux";
import Task from "./task";

const Listtasks = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <>
      {tasks?.map((el, index) => (
        <div key={index}>
          <Task description={el.description} isdone={el.isdone} id={el.id} />
        </div>
      ))}
    </>
  );
};

export default Listtasks;
