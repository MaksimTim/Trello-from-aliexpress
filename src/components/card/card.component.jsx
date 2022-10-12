import React, { useEffect, useState } from "react";
import "./card.styles.css";
import Task from "../task/task.component";
import { Link } from "react-router-dom";

const Card = ({ name, keysArr, setKeysArr }) => {
  const [inputVal, setInputVal] = useState("");
  const [tasksArr, setTasksArr] = useState(
    JSON.parse(localStorage.getItem(name)) ?? []
  );

  const onClickDeleteCard = () => {
    const newArr = keysArr.filter((key) => key !== name);
    setKeysArr(newArr);
    localStorage.removeItem(name);
  };

  const onClickAddTask = () => {
    inputVal && setTasksArr((prev) => [...prev, inputVal]);
    setInputVal("");
  };

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(tasksArr));
  }, [tasksArr]);

  const paramLink = name.replace(/ /g, "-");

  return (
    <div className="card-item">
      <div className="card-item__title">
        <Link to={`/card/${paramLink}`}>Card: {name}</Link>
        <button onClick={onClickDeleteCard}>del card</button>
      </div>
      <div className="card-item__tasks">
        {tasksArr.map((task, i) => (
          <Task
            key={task + i}
            task={task}
            tasksArr={tasksArr}
            setTasksArr={setTasksArr}
          />
        ))}
      </div>
      <div className="card-item__input">
        <input
          name="cardName"
          value={inputVal}
          required
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={onClickAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default Card;
