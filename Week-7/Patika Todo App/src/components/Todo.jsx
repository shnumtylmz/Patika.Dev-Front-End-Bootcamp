// src/components/Todo.js

import React, { useState } from "react";

const Todo = ({
  todo,
  index,
  handleCheckbox,
  deleteTodo,
  updatedTodo,
  activeFilter,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSave = () => {
    if (editedText.trim()) {
      updatedTodo(index, editedText);
    }
    setIsEditing(false);
  };

  return (
    <li
      className={todo.completed ? "completed" : ""}
      style={{
        display:
          (todo.completed && activeFilter === "active") ||
          (!todo.completed && activeFilter === "completed")
            ? "none"
            : "block",
      }}
    >
      <div className={isEditing ? "view hidden" : "view"}>
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheckbox(index)}
        />
        <label onClick={() => setIsEditing(true)}>{todo.text}</label>
        <button className="destroy" onClick={() => deleteTodo(index)}></button>
      </div>
      {isEditing && (
        <input
          className="edit-input"
          type="text"
          value={editedText}
          onChange={handleTextChange}
          onBlur={handleEditSave}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEditSave();
            }
          }}
          autoFocus
        />
      )}
    </li>
  );
};

export default Todo;
