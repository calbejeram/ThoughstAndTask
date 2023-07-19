import React from 'react';
import ThoughtsHandler from './ThoughtsHandler';
import Thoughts from './Thoughts';

function ThoughtsForm({dateAdded, thoughtsInput, handleDateAdded, handleThoughtsInput, handleSubmit}) {
  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <div className='div1'>
                <label>Thoughts for the day</label>
                <div>
                    <label>Date:</label>
                    <input type='date' for="date" id='date' value={dateAdded} onChange={handleDateAdded}></input>
                </div>
            </div>
            <div className='div2'>
                <textarea placeholder='input fields for thoughts' id='thoughts' value={thoughtsInput} onChange={handleThoughtsInput}></textarea>
                <button type='submit' id='submit'>Save</button>
            </div>
            <div className='div3'>
                <label>Thoughts for the day</label>
            </div>
        </form>
    </div>
  );
};

export default ThoughtsForm;