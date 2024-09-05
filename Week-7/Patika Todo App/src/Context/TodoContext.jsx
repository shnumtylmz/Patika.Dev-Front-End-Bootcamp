import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999999),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleCheckbox = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updatedTodo = (index, newText) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim()) {
        addTodo(inputValue);
        setInputValue("");
      }
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

  const filteredTodos = todos.filter(todo => {
    if (activeFilter === "all") return true;
    if (activeFilter === "active") return !todo.completed;
    if (activeFilter === "completed") return todo.completed;
    return true;
  });

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, handleCheckbox, updatedTodo, handleKeyDown, handleSubmit, setInputValue, clearCompleted, inputValue, filteredTodos, setActiveFilter, activeFilter }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
