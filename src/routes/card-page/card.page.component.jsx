import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Task from "../../components/task/task.component";

const CardPage = () => {
  const { key } = useParams();
  const paramKey = key.replace(/-/g, " ");

  const [tasksArr, setTasksArr] = useState(
    JSON.parse(localStorage.getItem(paramKey)) ?? []
  );

  useEffect(() => {
    localStorage.setItem(paramKey, JSON.stringify(tasksArr));
  }, [tasksArr]);

  return (
    <div>
      <b>{paramKey}</b>
      <div>
        {tasksArr.map((task, i) => (
          <Task
            key={task + i}
            task={task}
            tasksArr={tasksArr}
            setTasksArr={setTasksArr}
          />
        ))}
      </div>
    </div>
  );
};

export default CardPage;
