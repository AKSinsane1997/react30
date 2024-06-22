import React, { useState } from "react";

const Eight = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>add</button>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>remove</button>
        </li>
      ))}
    </div>
  );
};
export default Eight;
