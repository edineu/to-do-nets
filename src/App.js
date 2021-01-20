import React, { useState } from "react";
// imported components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInput];
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
