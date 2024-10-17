import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} removeTodo={() => removeTodo(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
