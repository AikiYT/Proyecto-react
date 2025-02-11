import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = () => {


    const {id} = useParams(); // en una proxima seccion veremos esto del params
    return (
        <div>
            <h1>Task details:</h1>
        </div>
    );
}

export default TaskDetailPage;
