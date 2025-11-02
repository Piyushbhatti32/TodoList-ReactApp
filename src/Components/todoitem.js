import React, { useState } from "react";
import Edit from "./edit";
import Dropdown from "react-bootstrap/Dropdown";
import Toggle from "./toggle";
import DeleteBtn from "./deletebtn";

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  return (
    <div className="row justify-content-between align-items-center w-100 mt-2 border-2 rounded p-2 shadow md-shadow-sm">
      <div className="col-8 d-flex flex-column flex-md-row justify-content-between gap-2">
        <h5>{todo.title}</h5>
        <hr className="d-block d-md-none" />
        <p>{todo.desc}</p>
        <p className="d-none d-md-block">{todo.completed ? "Completed" : "Pending"}</p>
      </div>
      
      <div className="col-4 d-flex justify-content-end gap-3 ">
        {/* Full buttons for md and larger screens */}
        <div className="d-none d-md-flex align-items-center gap-3">
          <Toggle todo={todo} onToggle={onToggle} />
          <Edit todo={todo} onEdit={onEdit} className="btn btn-sm btn-warning" />
          <DeleteBtn todo={todo} onDelete={onDelete} />
        </div>

        {/* Collapsed actions for small screens */}
        <div className="d-flex flex-column d-md-none align-items-center">
          <p className="d-block d-md-none">{todo.completed ? "Completed" : "Pending"}</p>
          <Dropdown show={undefined}>
            {/* controlled via internal show state below */}
            <ControlledDropdown todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;

function ControlledDropdown({ todo, onToggle, onDelete, onEdit }) {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown show={open} onToggle={(nextShow) => setOpen(nextShow)}>
      <Dropdown.Toggle variant="secondary" id={`dropdown-${todo.id}`} size="sm">
        Actions
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item as="div">
          <Toggle
            todo={todo}
            onToggle={(t) => {
              onToggle(t);
              setOpen(false);
            }}
          />
        </Dropdown.Item>
        <Dropdown.Item as="div">
          {/* Render the Edit button (opens modal) inside the dropdown and close the menu */}
          <Edit todo={todo} onEdit={onEdit} onOpen={() => setOpen(false)} />
        </Dropdown.Item>
        <Dropdown.Item as="div">
          <DeleteBtn
            todo={todo}
            onDelete={(t) => {
              onDelete(t);
              setOpen(false);
            }}
          />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
