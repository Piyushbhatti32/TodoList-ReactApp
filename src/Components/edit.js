import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

function Edit({ todo: initialTodo, onEdit }) {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [todo, setTodo] = useState(initialTodo || {
    title: '',
    desc: '',
    completed: false
  });

  useEffect(() => {
    if (initialTodo) {
      setTodo(initialTodo);
    }
  }, [initialTodo]);

  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
  };

  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (!todo.title || !todo.desc) {
      setShowAlert(true);
      return;
    }
    onEdit(todo);
    handleClose();
  };

  return (
    <>
      <Button variant="warning" className="btn-sm" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAlert && (
            <Alert variant="danger" className="text-center">
              <strong>Fill all the fields!</strong> Title and Description cannot be blank.
            </Alert>
          )}
          <Form className="bg-light">
            <Form.Group className="mb-3" controlId="todoTitle">
              <Form.Label>Todo Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter todo title"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="todoDesc">
              <Form.Label>Todo Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter todo description"
                value={todo.desc}
                onChange={(e) => setTodo({ ...todo, desc: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
