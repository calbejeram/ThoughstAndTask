import React, { useEffect, useState } from 'react';
import ThoughtsForm from './ThoughtsForm';
import ThoughtsHandler from './ThoughtsHandler';

function Thoughts() {
    const [dateAdded, setDateAdded] = useState('');
    const [thoughtsInput, setThoughtsInput] = useState('');

    const handleDateAdded = (event) => {
        setDateAdded(event.target.value);
    };

    const handleThoughtsInput = (event) => {
        setThoughtsInput(event.target.value);
    };

    const loadData = localStorage.getItem("ThoughtsForm") ? JSON.parse(localStorage.getItem("ThoughtsForm")) : [];

    const [thoughtsArray, setThoughtsArray] = useState(loadData);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (dateAdded !== "" && thoughtsInput !== "") {
            const thoughtsArr = {dateAdded, thoughtsInput};

            setThoughtsArray([...thoughtsArray, thoughtsArr])

            setDateAdded("");
            setThoughtsInput("");
        } else {
            alert("Please enter some thoughts");
        };
    };

    useEffect(() => {
        localStorage.setItem("ThoughtsForm", JSON.stringify(thoughtsArray))
    }, [thoughtsArray]);
    
  return (
    <div>
        <div className='journalContainer'>
            <div className='formContainer'>
                <ThoughtsForm dateAdded={dateAdded} thoughtsInput={thoughtsInput} handleDateAdded={handleDateAdded} handleThoughtsInput={handleThoughtsInput} handleSubmit={handleSubmit} />
            </div>
            <div className='tableContainer'>
                <ThoughtsHandler TotArr={thoughtsArray} />
            </div>
        </div>
    </div>
  )
}

export default Thoughts;
