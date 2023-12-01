import { useState } from 'react';
import './App.css';

function App() {
  const [todos, Settodos] = useState([]);
  const [value, setInputVal] = useState("");

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addtodo() {
    if (value !== "") {
      Settodos((prevTodos) => [...prevTodos, value]);
      setInputVal("");
    }
  }

  function deltodo(todosIndex) {
    Settodos((prevTodos) =>
      prevTodos.filter((prevTodo, prevTodosIndex) => prevTodosIndex !== todosIndex)
    );
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addtodo();
    }
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
     <input
        type="text"
        placeholder="Enter the text"
        value={value}
        onChange={writeTodo}
        onKeyPress={handleKeyPress}
      />

      <button type="submit" className="button" onClick={addtodo}>
        +
      </button>
      <div className="container">
        {todos.map((todo, index) => (
          <div className="container textc" key={index}>
            <p>
              <input type="checkbox" />
              {todo}
              <button onClick={() => deltodo(index)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
