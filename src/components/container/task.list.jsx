// puse rfcp
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../../pure/task';


// import de los estilos scss
import '../../styles/task.scss'



// aqui hice un import de Task y de Levels para poder usarlos aqui todas sus variables en este objecto llamado default task que usare ahor aen app.js pero este es el ultimo paso despues de primero crear el modelo y luego de venir del pure ahi que venir aqui a components y llamar los imports y hacer esto que dije
const TaskListComponent = () => {

    // estado del componente
    
    
    // control del ciclo de vida
    useEffect(() => {
        console.log('task state has been modified')
        return() => {
            console.log('tasklist component is going to unmount')
        }
            
        },[Task]);
    
    
    //acuerdate que aqui dentro del new task estoy llamando al nombre descripcion etc acuerdate del POO
    const defaultTask = new Task('Iverson','Estudiante de software', false, LEVELS.NORMAL)
    
    const changeCompleted = (id) => {
        console.log('cambiar estado de una tarea')
    }



    
    return (
        <div>
            <div>
                Your Task: 
            </div>
            {/*Todo: aplicar un form/map para renderizar una lista */}
        <TaskComponent task={defaultTask}></TaskComponent>
        {/*bueno aqui basicamente llame a Taskcomponent luego llame a task que la cree en task.jsx que me traera todo lo que puse el nombre etc todo eso y luego puse el detaulttask que es todo lo que puse aqui*/}
        </div>
    );
};





export default TaskListComponent;
