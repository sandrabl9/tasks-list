import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';

const Form = (props)=> {

    const taskInputRef = useRef();

    const [input, setInput] = useState('');

    const inputHandler = () => {
        const enteredTask = taskInputRef.current.value;
        setInput(enteredTask);
        
        
    };


    const addHandler = e => {
        e.preventDefault();

        
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        };

        props.onSubmit(newTask);
        taskInputRef.current.value = '';
        
       
        
    };
    


    return(
        <form className='task-form'
        onSubmit={addHandler}>
            <input className='task-input' 
            ref={taskInputRef}
            type='text'
            placeholder='Chores to do'
            name='text'
            onChange={inputHandler}
            />
            <button className='task-button'>Add</button>
        </form>

    );
};

export default Form;