import React from 'react';

const Toggle = ({ todo, onToggle }) => {
  return (
    <button
      className={`btn btn-sm ${todo.completed ? 'btn-danger' : 'btn-success'}`}
      onClick={(e) => {
        e.stopPropagation();
        onToggle(todo);
      }}
    >
      {todo.completed ? 'Pending' : 'Completed'}
    </button>
  );
};

export default Toggle;
