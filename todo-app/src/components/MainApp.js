import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewTodo from "./NewTodo";
import MainForm from "./Form";

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state.todoReducer,
  }));
  const { data } = reducer;

  const createTodo = (item) => {
    dispatch({ type: "CREATE_TODO", payload: item });
  };

  const deleteTodo = (item) => {
    dispatch({ type: "DELETE_TODO", payload: item });
  };
  return (
    <div className="container">
      <h1>Todo App</h1>
      <MainForm createTodo={createTodo} />
      <section className="todo-section">
        {data.map((todo) => (
          <NewTodo
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo)}
          />
        ))}
      </section>
    </div>
  );
};

export default MainApp;
