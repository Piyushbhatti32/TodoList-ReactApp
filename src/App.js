import "./App.css";
import Header from "./Components/nav";
import Footer from "./Components/footer";
import Todos from "./Components/todos";
import Addtodo from "./Components/addtodo";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Edit from "./Components/edit";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let initialTodos;
  if (localStorage.getItem("todos") === null) {
    initialTodos = [];
  } else {
    initialTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, settodos] = useState(initialTodos);
  const [deleteMsg, setDeleteMsg] = useState(null);

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    const newTodos = todos.filter((e) => {
      return e !== todo;
    });
    settodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setDeleteMsg("Todo deleted successfully");
    setTimeout(() => setDeleteMsg(null), 3000);
  };

  const onToggle = (todo) => {
    console.log("I am onToggle of todo", todo);
    const newTodos = todos.map((e) => {
      if (e.id === todo.id) {
        return { ...e, completed: !e.completed };
      }
      return e;
    });
    settodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const onAdd = (todo) => {
    const newTodos = [...todos, todo];
    settodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const onEdit = (editedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === editedTodo.id) {
        return editedTodo;
      }
      return todo;
    });
    settodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <Router>
      <div className="App">
        <Header title="Todo App" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Addtodo onAdd={onAdd} />
                {deleteMsg && (
                  <Alert variant="danger" className="w-50 text-center mx-auto">
                    <strong>{deleteMsg}</strong>
                  </Alert>
                )}
                <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<Edit todos={todos} onEdit={onEdit} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
