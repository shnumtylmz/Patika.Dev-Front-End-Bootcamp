import { createContext } from "react";
import { useContext, useState } from "react";

const TodoContext = createContext("todos");

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (text) => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999999),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };


  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id!== todoId));
  };

  return (
    <>
      <TodoContext.Provider addTodo={addTodo} deleteTodo={deleteTodo}>{children}</TodoContext.Provider>
    </>
  );
};

export default TodoContext;
