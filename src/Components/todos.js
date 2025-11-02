import React from 'react'
import TodoItem from './todoitem'


function Todos(props) {
  return (
    <div className='container d-flex flex-column min-height-100vh align-items-center'>
        <h2 className='text-center mt-2'>Todos List</h2>
        {props.todos.length === 0 ? <h4 className='mt-2' style={{ color: 'gray', textAlign: 'left'}}>No Todos to show</h4> : props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={props.onDelete} onEdit={props.onEdit} onToggle={props.onToggle} />
        ))}
    </div>
  )
}

export default Todos
