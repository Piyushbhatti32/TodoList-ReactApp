import React from "react";
import Edit from "./edit";

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  return (
    <div className="row justify-content-between align-items-center w-100 mt-2 border-2 rounded p-2 shadow-sm">
      <div className="col-8 d-flex justify-content-between gap-3">
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
        <p>{todo.completed ? "Completed" : "Pending"}</p>
      </div>
      
      <div className="col-4 d-flex justify-content-end gap-3 ">
        {todo.completed ? (
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              onToggle(todo);
            }}
          >
            Pending
          </button>
        ) : (
          <button
            className="btn btn-sm btn-success"
            onClick={() => {
              onToggle(todo);
            }}
          >
            Completed
          </button>
        )}
        <Edit todo={todo} onEdit={onEdit} className="btn btn-sm btn-warning"/>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
