import React, { useState, useEffect } from "react";
import useToDoStore from "../stores/todoStore";

const intitialValue = {
  taskName: "",
  userId: 22,
};

function ToDoPage() {
  const [todo, setTodo] = useState(intitialValue);

  const actionFetchToDoByUserId = useToDoStore((state) => state.actionFetchToDoByUserId);
  const actionAddTodo = useToDoStore((state) => state.actionAddTodo);
  const actionToggleTodo = useToDoStore((state) => state.actionToggleTodo);
  const actionDeleteTodo = useToDoStore((state) => state.actionDeleteTodo);
  const todos = useToDoStore((state) => state.todos);

  const userId = 22;

  useEffect(() => {
    actionFetchToDoByUserId(userId);
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (todo.taskName.trim() !== "") {
      actionAddTodo(todo);
      setTodo(intitialValue);
    }
  }

  async function handleChangeCheck(id, completed) {
    await actionToggleTodo(id, completed);
  }

  async function handleDeleteClick(id) {
    await actionDeleteTodo(id);
    await actionFetchToDoByUserId(userId);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="border border-red-500 rounded-xl w-xl px-10 py-8 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl">ToDo List</h1>
      <form className="flex justify-between gap-2" onSubmit={handleFormSubmit}>
        <input
          className="border border-red-500 rounded-sm"
          type="text"
          name="taskName"
          placeholder="New task"
          value={todo.taskName}
          onChange={handleInputChange}
        />
        <button className="cursor-pointer" type="submit">
          Add
        </button>
      </form>
      <hr className="bg-red-500 w-full" />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleChangeCheck(todo.id, todo.completed)}
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.taskName}
            </span>
            <button className="cursor-pointer" onClick={() => handleDeleteClick(todo.id)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default ToDoPage;
