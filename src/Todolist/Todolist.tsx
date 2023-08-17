import React, { useState } from "react";
import "../index.css";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const addTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };
  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container-todolist">
      <h1>Todo List</h1>
      <p>Get things done, one item at a time</p>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </p>
            <div className="checkComplete">
              <button>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                />
              </button>
              <button onClick={() => deleteTodo(todo.id)}>
                <MdOutlineDeleteOutline />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="addToDoList">
        <p>Add the todo list</p>
        <input
          className="inputAdd"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export default Todolist;
