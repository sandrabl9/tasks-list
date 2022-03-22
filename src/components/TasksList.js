import React, { useState } from 'react';
import Form from './Form';
import Task from './Task';
import './TasksList.css';


const TasksList = () => {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        };

    };

    const removeTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);

    };

    const completedTask = id => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            };
            return task;
        });

        setTasks(updatedTasks);

    };

    return(
        <>
        <Form onSubmit={addTask}/>
        <div className='tasks-list-container'>
          { 
          tasks.map((task)=> <Task
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          completedTask={completedTask}
          removeTask={removeTask}
          />
          )}
        </div>
        </>
    );
};

export default TasksList;