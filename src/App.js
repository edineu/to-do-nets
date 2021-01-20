import React, { useState } from "react";
import "./App.css";
// imported components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // function that allows you to change the states
  // the info is stored
  const [inputText, setInputText] = useState("");
  // Here setup the array of objects (test, complete, add id
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
