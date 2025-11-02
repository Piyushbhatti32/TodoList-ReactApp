import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const Addtodo = (props) => {
  const [todo, setTodo] = React.useState({
    id: Math.random().toString(36).substr(2, 9),
    title: "",
    desc: "",
    completed: false,
  });
  const [showAlert, setShowAlert] = React.useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!todo.title || !todo.desc) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    props.onAdd(todo);
    setTodo({
      id: Math.random().toString(36).substr(2, 9),
      title: "",
      desc: "",
      completed: false,
    });
    setShowSuccessAlert(true);
  };

  React.useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  React.useEffect(() => {
    if (showSuccessAlert) {
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    }
  }, [showSuccessAlert]);

  return (
    <div className="container d-flex flex-column align-items-center">
      {showAlert && (
        <Alert key="danger" variant="danger" className="w-50 text-center">
          <strong>Fill all the fields</strong> Title and Description cannot be blank.
        </Alert>
      )}
      {showSuccessAlert && (
        <Alert key="success" variant="success" className="w-50 text-center">
          <strong>Todo added successfully</strong>
        </Alert>
      )}
      <h2 className="text-center mt-2">Add Todo</h2>
      <Form
        onSubmit={onSubmit}
        className="m-3 bg-light p-3 border rounded shadow w-100"
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter todo title"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter todo description"
            value={todo.desc}
            onChange={(e) => setTodo({ ...todo, desc: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-sm">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Addtodo;
