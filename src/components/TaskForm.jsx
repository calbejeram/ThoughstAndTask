import React from 'react';
import TaskHandler from './ThoughtsHandler';
import Task from './Thoughts';

function TaskForm({taskDateAdded, taskInput, handleTaskDateAdded, handleTaskInput, handleSubmit}) {
  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <div className='div1'>
                <label>Task for the day</label>
                <div>
                    <label>Date:</label>
                    <input type='date' for="date" id='date' value={taskDateAdded} onChange={handleTaskDateAdded}></input>
                </div>
            </div>
            <div className='div2'>
                <textarea placeholder='input fields for task' id='task' value={taskInput} onChange={handleTaskInput}></textarea>
                <button type='submit' id='submit'>Save</button>
            </div>
            <div className='div3'>
                <label>Tasks for the day</label>
            </div>
        </form>
    </div>
  )
}

export default TaskForm;
