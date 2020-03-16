import React, { useState } from "react";
import uuid from "uuid/v4";

const MainApp = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([
    { todo: "wake up", id: 1 },
    { todo: "eat breakfast", id: 2 }
  ]);

  const handleChange = e => {
    setValue(e.target.value);
    const obj = {
      todo: value,
      id: uuid()
    };
    setData([...data, obj]);
    console.log(e.target.value);
  };

  //// test

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form>
        <input
          type="text"
          name="todo"
          id="todo"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <section className="todo-section">
        <div className="todo">
          <span>wake up</span>
          <div className="icons">
            <span>d</span>
            <span>e</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainApp;
