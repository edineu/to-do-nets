// imported components
import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import Form from "../components/Form";
// import GlobalStyle from "./globalStyles";

function Home() {
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
      <div className="Home">
        <header>
          <h1>Ed's To-do List FE Chalenge</h1>
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
    </>
  );
}

export default Home;
