import './MyJournal.css';
import Thoughts from './components/Thoughts';
import Task from './components/Task';

function MyJournal() {
    return (
        <div className='mainContainer'>
            <h1>My Journal</h1>
            <div className='subContainer'>
                <Thoughts />
                <Task />
            </div>
        </div>
    );
};

export default MyJournal;