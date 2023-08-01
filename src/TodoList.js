import React, { useState } from 'react';
import './style.css'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TodoList;
