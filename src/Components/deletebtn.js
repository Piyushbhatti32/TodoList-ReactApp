import React from 'react';

const DeleteBtn = ({ todo, onDelete, onAfter }) => {
  return (
    <button
      className="btn btn-sm btn-danger"
      onClick={(e) => {
        e.stopPropagation();
        onDelete(todo);
        if (typeof onAfter === 'function') onAfter();
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
