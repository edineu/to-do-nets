import React, { useState, useEffect } from "react";
// styling
import GlobalStyle from "./globalStyles";
import "./App.css";
// Navagation
import { Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./_Nav";
import About from "./_Nav";
import Shop from "./_Shop";
// Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // State STUFF function that allows you to change the states
  // Declare a new state variable, which we'll call later
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // For Hooks I have use useState
  // Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <>
      <Route>
        <GlobalStyle />
        <div className="App">
          <header>
            <h1>Ed's Todo List</h1>{" "}
          </header>
          <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
          />
          <TodoList
            filteredTodos={filteredTodos}
            setTodos={setTodos}
            todos={todos}
          />
        </div>
      </Route>
    </>
  );
}

export default App;
