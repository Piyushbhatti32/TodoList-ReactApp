import React from 'react';

const Toggle = ({ todo, onToggle, onAfter }) => {
  return (
    <button
      className={`btn btn-sm ${todo.completed ? 'btn-danger' : 'btn-success'}`}
      onClick={(e) => {
        e.stopPropagation();
        onToggle(todo);
        if (typeof onAfter === 'function') onAfter();
      }}
    >
      {todo.completed ? 'Pending' : 'Completed'}
    </button>
  );
};

export default Toggle;
