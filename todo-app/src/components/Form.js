import React, { useState } from "react";

const Form = ({ createTodo, editVal, editing }) => {
  const [value, setValue] = useState("");
  //   console.log(editing);

  const handleChange = e => {
    let val = ([e.target.name] = e.target.value);
    setValue(val);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        value={editing ? editVal : value}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
