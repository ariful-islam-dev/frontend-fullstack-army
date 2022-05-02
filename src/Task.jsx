import React from "react";

const Task = ({ task }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>
        <small>{task.status}</small>
      </p>
      <p>{task.text}</p>
    </li>
  );
};

export default Task;
