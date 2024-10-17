import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button onClick={removeTodo} className="remove-btn">
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default TodoItem;
