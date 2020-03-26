import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions/index";
import NewTodo from "./NewTodo";
import MainForm from "./Form";

const MainApp = props => {
  console.log(props.data);
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
    //  console.log(newData);

    setEditVal(selected.todo);
    setEditing(!editing);
    setData([...filtered, newData]);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <MainForm
        createTodo={props.createTodo}
        editVal={editVal}
        editing={editing}
      />
      <section className="todo-section">
        {props.data.map(todo => (
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

const mapStateProps = ({ todoReducer }) => {
  //   console.log(todoReducer);
  return {
    data: todoReducer.data
  };
};

export default connect(mapStateProps, { createTodo })(MainApp);

// <Form createTodo={createTodo} editVal={editVal} editing={editing} />
//    <section className="todo-section">
//      {data.map(todo => (
//        <NewTodo
//          key={todo.id}
//          todo={todo}
//          deleteTodo={() => deleteTodo(todo.id)}
//          editTodo={() => editTodo(todo.id)}
//        />
//      ))}
//    </section>
