import React from "react";
import "./task.styles.css";

const Task = ({ task, tasksArr, setTasksArr }) => {
  const onClickDelTask = () => {
    const newArr = tasksArr.filter((key) => key !== task);
    setTasksArr(newArr);
  };

  return (
    <div className="task-container">
      {task}
      <button onClick={onClickDelTask}>Del</button>
    </div>
  );
};

export default Task;
