import React from "react";
import Edit from "./edit";
import Dropdown from "react-bootstrap/Dropdown";
import Toggle from "./toggle";
import DeleteBtn from "./deletebtn";

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  return (
    <div className="row justify-content-between align-items-center w-100 mt-2 border-2 rounded p-2 shadow-sm">
      <div className="col-8 d-flex flex-column flex-md-row justify-content-between gap-3">
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
        <p>{todo.completed ? "Completed" : "Pending"}</p>
      </div>
      
      <div className="col-4 d-flex justify-content-end gap-3 ">
        {/* Full buttons for md and larger screens */}
        <div className="d-none d-md-flex align-items-center gap-3">
          <Toggle todo={todo} onToggle={onToggle} />
          <Edit todo={todo} onEdit={onEdit} className="btn btn-sm btn-warning" />
          <DeleteBtn todo={todo} onDelete={onDelete} />
        </div>

        {/* Collapsed actions for small screens */}
        <div className="d-flex d-md-none align-items-center">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id={`dropdown-${todo.id}`} size="sm">
              Actions
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item
                as="div">
                <Toggle todo={todo} onToggle={onToggle} />
              </Dropdown.Item>
              <Dropdown.Item as="div">
                {/* Render the Edit button (opens modal) inside the dropdown */}
                <Edit todo={todo} onEdit={onEdit} />
              </Dropdown.Item>
              <Dropdown.Item
                as="div">
                <DeleteBtn todo={todo} onDelete={onDelete} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
