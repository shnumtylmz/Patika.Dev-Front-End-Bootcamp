import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import "../App.css";
import { useState } from "react";

function Todo({ todo, onDeleteTodo, onUpdateTodo }) {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const deleteTodo = () => {
    onDeleteTodo(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    }
    
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
    <div className="todo-item">
      <div>
        {editable ? (
          <input
            style={{ width: "100%" }}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={deleteTodo} />
        {editable ? (
          <FaCheckCircle className="todo-icons" onClick={updateTodo}/>
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
