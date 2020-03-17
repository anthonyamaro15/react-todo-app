import React, { useState, useEffect } from "react";
import NewTodo from "./NewTodo";
import Form from "./Form";
import uuid from "uuid/v4";

const MainApp = () => {
  const [data, setData] = useState([]);
  const [editVal, setEditVal] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("data"));
    if (todoData) {
      setData(todoData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const createTodo = item => {
    const obj = {
      todo: item,
      id: uuid()
    };
    setData([...data, obj]);
  };

  const deleteTodo = id => {
    const newData = data.filter(list => list.id !== id);
    setData(newData);
  };

  const editTodo = id => {
    const filtered = data.filter(item => item.id !== id);
    const selected = data.find(item => item.id === id);
    const newData = {
      todo: editVal,
      id
    };
    console.log(newData);

    setEditVal(selected.todo);
    setEditing(!editing);
    setData([...filtered, newData]);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <Form createTodo={createTodo} editVal={editVal} editing={editing} />
      <section className="todo-section">
        {data.map(todo => (
          <NewTodo
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            editTodo={() => editTodo(todo.id)}
          />
        ))}
      </section>
    </div>
  );
};

export default MainApp;
