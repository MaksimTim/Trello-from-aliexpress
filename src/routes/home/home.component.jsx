import React, { useEffect, useState } from "react";
import "./home.styles.css";
import Card from "../../components/card/card.component";

const Home = () => {
  const KEY_LIST = "keyList";

  const [keysArr, setKeysArr] = useState(
    JSON.parse(localStorage.getItem(KEY_LIST)) ?? []
  );

  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    localStorage.setItem(KEY_LIST, JSON.stringify(keysArr));
  }, [keysArr]);

  const onClickAddCard = () => {
    inputVal && setKeysArr((prev) => [...prev, inputVal]);
    setInputVal("");
  };

  return (
    <div>
      <input
        name="cardName"
        value={inputVal}
        required
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={onClickAddCard}>Add Card</button>
      <div className='cards-container'>
        {keysArr.map((keyName, i) => (
          <Card
            key={keyName + i}
            name={keyName}
            keysArr={keysArr}
            setKeysArr={setKeysArr}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
