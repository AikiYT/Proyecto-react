import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({task}) => {


    const {id} = useParams(); // en una proxima seccion veremos esto del params
    return (
        <div>
            <h1>Task details:</h1>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
        </div>
    );
}

export default TaskDetailPage;
