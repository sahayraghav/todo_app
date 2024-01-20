import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <>
    <p>raghav smart hai</p>
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>

      <button onClick={() => deleteTask(index)}>-</button>
    </div>
    </>
  );
};

export default Task;