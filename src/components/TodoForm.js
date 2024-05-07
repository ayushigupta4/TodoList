import React, {useState, useEffect, useRef} from 'react';
import './TodoForm.css';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() *10000),
            text: input
        });

        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

  return (

        <div className='box'>
            <form className='todo-form' onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add a Task" 
                value={input} 
                name="text" 
                className='todo-input' 
                onChange={handleChange}
                ref={inputRef}/>
            <button className='todo-button'>+</button>

            </form>
        
        </div>
    )
}

export default TodoForm