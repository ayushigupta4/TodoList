import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import './Todo.css';


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
        <RiDeleteBin6Line onClick={() => removeTodo(todo.id)}
        className='delete-icon'/>
        <MdOutlineEdit onClick={() => setEdit({id: todo.id, value: todo.text})}
        className='edit-icon'/>

        </div>
    </div>
  ))
}

export default Todo