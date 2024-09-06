import React, { createContext, useState, useEffect } from "react";

const getTodosFromLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit(e);
  };

  const handleCheckbox = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const updatedTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos);
  };

  const completeAllTodos = () => {
    const updatedTodos = todos.map(todo => ({ ...todo, completed: true }));
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') return !todo.completed;
    if (activeFilter === 'completed') return todo.completed;
    return true;
  });

  return (
    <TodoContext.Provider
      value={{
        todos,
        inputValue,
        setInputValue,
        handleSubmit,
        handleKeyDown,
        handleCheckbox,
        deleteTodo,
        updatedTodo,
        clearCompleted,
        completeAllTodos,
        filteredTodos,
        setActiveFilter,
        activeFilter
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
