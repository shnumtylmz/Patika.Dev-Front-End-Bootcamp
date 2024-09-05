import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import Todo from './Todo';

const TodoList = () => {
  const { filteredTodos, handleCheckbox, deleteTodo, updatedTodo } = useContext(TodoContext);

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo, index) => (
        <Todo 
          key={todo.id}
          todo={todo}
          index={index}
          handleCheckbox={handleCheckbox}
          deleteTodo={deleteTodo}
          updatedTodo={updatedTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
