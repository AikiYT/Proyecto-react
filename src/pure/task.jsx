// lo primero que hice fue escribir rfcp y se creo esta estructura

// importamos la hoja de estilos de task.scss
import '../styles/task.scss'



import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../models/task.class';


const TaskComponent = ({task}) => { // esto aqui este task nos servira para poder poner tu sabe el task. tal cosa etc
    

    useEffect(() => {
        console.log('create task')
        return() => {
            console.log(`task:  ${task.name}is going to unmount `)
        }
            
        },[task]);  // cada modificacion que alla en task se hara este effect
    
    
    
    return (
        <div>
        <h1> Your task:</h1>
            <h2 className='task-name'>
            Nombre: {task.name}
            </h2>
            <h3>
                descripcion; {task.description}
            </h3>
            <h4>
                level: { task.level }
            </h4>
            <h5>
                this task is: { task.completed ? 'COMPLETED':'PENDING'} 
            </h5>
        </div>
    ); // en ese h5 basicamente le pregunta si esa tarea esta completafa que diga si esta o sino si esta pendiente
};


TaskComponent.propTypes = {
task: PropTypes.instanceOf(Task) // instance off es cuando no le especifico si es string o algo asi en este caso quiero que sea una tarea osea task no nada de eso de string ni nada
};


export default TaskComponent;
