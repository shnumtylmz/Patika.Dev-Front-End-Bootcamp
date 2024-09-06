// src/components/Footer.js

import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const Footer = () => {
  const { todos, clearCompleted, setActiveFilter, activeFilter } = useContext(TodoContext);

  const remainingTodos = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remainingTodos}</strong>
        {remainingTodos === 1 ? ' item left' : ' items left'}
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === 'all' ? 'selected' : ''}
            onClick={() => setActiveFilter('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => setActiveFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === 'completed' ? 'selected' : ''}
            onClick={() => setActiveFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
