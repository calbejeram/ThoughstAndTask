import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskHandler from './TaskHandler';

function Task() {
    const [taskDateAdded, setTaskDateAdded] = useState('');
    const [taskInput, setTaskInput] = useState('');

    const handleTaskDateAdded = (event) => {
        setTaskDateAdded(event.target.value);
    };

    const handleTaskInput = (event) => {
        setTaskInput(event.target.value);
    };

    const reloadData = localStorage.getItem("TaskForm") ? JSON.parse(localStorage.getItem("TaskForm")) : [];

    const [taskArray, setTaskArray] = useState(reloadData);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (taskDateAdded !== "" && taskInput !== "") {
            const taskArr = {taskDateAdded, taskInput};

            setTaskArray([...taskArray, taskArr])

            setTaskDateAdded("");
            setTaskInput("");
        } else {
            alert("Please add some task!");
        };
    };

    useEffect(() => {
        localStorage.setItem("TaskForm", JSON.stringify(taskArray))
    }, [taskArray]);

  return (
    <div>
        <div className='taskContainer'>
            <div className='formContainer'>
                <TaskForm taskDateAdded={taskDateAdded} taskInput={taskInput} handleTaskDateAdded={handleTaskDateAdded} handleTaskInput={handleTaskInput} handleSubmit={handleSubmit} />
            </div>
            <div className='tableContainer'>
                <TaskHandler TaskArr={taskArray} />
            </div>
        </div>
    </div>
  )
}

export default Task;