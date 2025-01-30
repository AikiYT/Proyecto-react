import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

const TaskForm = ({add, length }) => {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL)

   function addTask(e){
    e.preventDefault();
    const newTask = new Task(
        nameRef.current.value,
        descriptionRef.current.value,
        false,
        levelRef.current.value
    );
    add(newTask);
   }
   
    const normalStyle = {
    color: 'blue',
    fontWeight: 'bold',
    
   }


    const urgentStyle = {
    color: 'yellow',
    fontWeight: 'bold'
   }


    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }




   
    return (
        <div>
            <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
            <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='task Name'  />
            <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'  />
        
            <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
            <option style={normalStyle} value={LEVELS.NORMAL}>
                Normal
            </option>
            <option style={urgentStyle} value={LEVELS.URGENTE}>
                URGENTE
            </option>
            <option style={blockingStyle} value={LEVELS.BLOCKING}>
                BLOCKING
            </option>
            </select>
            <button type='submit' className='btn btn-success btn-lg ms-2'>
                {length > 0 ? 'add new task': 'create your firts tasks'}
                </button>
                </div>
            
            </form>
        </div>
    );
}
TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}
export default TaskForm;
