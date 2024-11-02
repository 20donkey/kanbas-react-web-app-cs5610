import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

// Define a type for Todo
interface Todo {
  id: string;
  title: string;
}

export default function TodoList() {
  const todos = useSelector((state: { todosReducer: { todos: Todo[] } }) => state.todosReducer.todos);

  return (
    <div id="wd-todo-list-redux" className="container mt-4">
      <h2 className="mb-4">Todo List</h2>

      {/* TodoForm - Add and Update Input Section */}
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Learn Mongo" />
        <button className="btn btn-warning" type="button">Update</button>
        <button className="btn btn-success" type="button">Add</button>
      </div>

      {/* Todo Items List */}
      <ul className="list-group">
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
