import React, { useState } from "react";
// imported components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // function that allows you to change the states
  // the info is stored
  const [inputText, setInputText] = useState("");
  // Here setup the array of objects
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List{inputText}</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
