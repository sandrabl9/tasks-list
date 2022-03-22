import React from 'react';
import './Task.css';
import { AiOutlineDelete } from 'react-icons/ai';

const Task = ({id, text, completed, completedTask, removeTask }) => {
    return(
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className='text-task'
            onClick={()=> completedTask(id)}>
                {text}
            </div>
            <div className='task-container-icon'
             onClick={() => removeTask(id)}>
                <AiOutlineDelete className='task-icon' />
            </div>

        </div>
    );
};

export default Task;