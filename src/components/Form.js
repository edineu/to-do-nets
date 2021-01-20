import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  // add functionality in here
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  // This will prevent the page refresh every time you add
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      // if i have any todos parce them
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    //Set the input text to zero
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
