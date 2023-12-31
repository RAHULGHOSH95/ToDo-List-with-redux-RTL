import React from "react";
import { connect, useDispatch } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
      {todo && todo.completed ? "done" : "tobe"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default Todo;
