import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const { inputValue, setInputValue, handleSubmit, handleKeyDown, completeAllTodos } = useContext(TodoContext);

  return (
    <header className="header">
      <h1>todos</h1>
      <FaChevronDown className="complete-all" onClick={completeAllTodos}/>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="New todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;
