import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const NewTodo = ({ todo, deleteTodo }) => {
  return (
    <div className="todo">
      <span>{todo.todo}</span>
      <div className="icons">
        <span onClick={deleteTodo}>{<MdDelete />}</span>
        <span onClick={deleteTodo}>{<FaEdit />}</span>
      </div>
    </div>
  );
};

export default NewTodo;
