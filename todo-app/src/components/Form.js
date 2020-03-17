import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    let val = ([e.target.name] = e.target.value);
    setValue(val);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createTodo(value);
    setValue("");
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
