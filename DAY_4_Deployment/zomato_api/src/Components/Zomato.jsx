import React, { useState } from "react";
import dotenv from "dotenv";

function Zomato() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    const zomato = fetch(
      `https://${process.env.REACT_APP_ZOMATO_API}/api/json/v1/1/search.php?s=${text}`
    )
      .then((res) => res.json())
      .then((result) => setData([result]));
  };

  return (
    <div>
      <h1>ZOMATO API</h1>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={handleAdd}>Add</button>

      {data.map((item) => item.meals.map((e) => <h4>{e.strMeal}</h4>))}
    </div>
  );
}

export default Zomato;
