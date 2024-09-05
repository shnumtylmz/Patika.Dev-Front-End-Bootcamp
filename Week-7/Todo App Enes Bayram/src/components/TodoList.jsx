import React from "react";
import Todo from "./Todo";

function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
  return (
    <div className="list-todo">
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className="todo-wrapper">
            <Todo todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>
          </div>
        ))}
    </div>
  );
}

export default TodoList;
