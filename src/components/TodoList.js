import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let todoString = localStorage.getItem("todos")
        if(todoString){
          let todos = JSON.parse(localStorage.getItem("todos")) 
          setTodos(todos)
        }
      }, [])

    const saveToLS = (params) => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        saveToLS(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        const updatedTodos = todos.map(item => (item.id === todoId ? newValue : item));
        setTodos(updatedTodos);
        saveToLS(updatedTodos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
        saveToLS(removeArr);
    }

    const completeTodo = id => {
        let updatesTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatesTodos);
        saveToLS(updatesTodos);
    };
  return (
    <div>
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos={todos}
        completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default TodoList