const Todo = ({ text, todos, todo, setTodos }) => {
  // add Events
  // Delete funcion
  const deleteHandler = () => {
    // if the id matches the id it will remove the elem
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  // complete the todo item
  const completeHandler = () => {};

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
