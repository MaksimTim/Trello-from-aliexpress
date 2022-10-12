import React, {useEffect, useState} from "react";

const Card = ({ name, keysArr, setKeysArr }) => {
  const [inputVal, setInputVal] = useState('')
  const [tasksArr, setTasksArr] = useState(
    JSON.parse(localStorage.getItem(name)) ?? []
  );

  const onClickDeleteCard = () => {
    const newArr = keysArr.filter((key) => key !== name);
    setKeysArr(newArr);
  };

  const onClickAddTask = () => {
    inputVal && setTasksArr((prev) => [...prev, inputVal]);
  }

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(tasksArr));
  }, [tasksArr]);

  return (
    <div>
      <div>
        Card: {name}
        <button onClick={onClickDeleteCard}>delete</button>
      </div>
      <div>
        {tasksArr.map(task => <div key={task}>{task}</div>)}
      </div>
      <div>
        <input
          name="cardName"
          value={inputVal}
          required
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={onClickAddTask}>Add Card</button>
      </div>
    </div>
  );
};

export default Card;
