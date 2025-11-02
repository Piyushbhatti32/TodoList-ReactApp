import React from 'react';

const DeleteBtn = ({ todo, onDelete }) => {
  return (
    <button
      className="btn btn-sm btn-danger"
      onClick={(e) => {
        e.stopPropagation();
        onDelete(todo);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
