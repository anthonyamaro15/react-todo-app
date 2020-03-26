import React from "react";
import { connect } from "react-redux";
import { createTodo, deleteTodo } from "../actions/index";
import NewTodo from "./NewTodo";
import MainForm from "./Form";

const MainApp = props => {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <MainForm createTodo={props.createTodo} />
      <section className="todo-section">
        {props.data.map(todo => (
          <NewTodo
            key={todo.id}
            todo={todo}
            deleteTodo={() => props.deleteTodo(todo)}
          />
        ))}
      </section>
    </div>
  );
};

const mapStateProps = ({ todoReducer }) => {
  return {
    data: todoReducer.data
  };
};

export default connect(mapStateProps, { createTodo, deleteTodo })(MainApp);
