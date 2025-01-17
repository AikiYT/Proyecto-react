// puse rfcp
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../../pure/task';


// import de los estilos scss
import '../../styles/task.scss'
import TaskForm from '../../pure/forms/task.Form';



// aqui hice un import de Task y de Levels para poder usarlos aqui todas sus variables en este objecto llamado default task que usare ahor aen app.js pero este es el ultimo paso despues de primero crear el modelo y luego de venir del pure ahi que venir aqui a components y llamar los imports y hacer esto que dije
const TaskListComponent = () => {
    const defaultTask1 = new Task('Iverson','Estudiante', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Iverson','Estudiante', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('Iverson','Estudiante', false, LEVELS.BLOCKING)

    // estado del componente
    const [task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3])
    // control del ciclo de vida
    useEffect(() => {
        console.log('task state has been modified')
        return() => {
            console.log('tasklist component is going to unmount')
        }
            
        },[Task]);
    
    
    //acuerdate que aqui dentro del new task estoy llamando al nombre descripcion etc acuerdate del POO




    const changeCompleted = (id) => {
        console.log('cambiar estado de una tarea')
    }



    
    return (
        <div>
            <div className='col-12'>
            <div className='card'> {/*aqui estoy usando bootstrap ejemplo aqui dije que quiero una card y asi son palabras clave de bootrap y abajo le dije p-3 que significa padding 3px */}
            {/*Card header (tittle) */}
            <div className='card-header p-3'>
            <h5>
            Your Task:
            </h5>

            </div>
            {/*Card Body (content) */}
        <div className='card-body' data-mb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}> {/*Esta es otra forma de darle style a algo en este caso a este div pongo style{} y dentro de eso pongo lo que quiero de css en este caso position pongo luego : y entre '' lo que quiero*/}
                                     {/*este datamb quisiyoque es si la card por alguna razon se pasan de escirbir o algo de los 400px que baje con un scroll */}
        <table>
        <thead>
            <tr>
                <th scope='col'>Title</th>
                <th scope='col'>description</th>
                <th scope='col'>Priority</th>
                <th scope='col'>Actions</th>
            </tr>
            </thead>
            <tbody>
                {/*aqui en el tbody es lo que me servira para iterar sobre una lista de tareas */}
            {task.map ((task, index) => {
                return (
                    <TaskComponent
                    key={index}    // vuelve a ver el video 7 el minuto 54 que no entendiste el mapeo
                    task={task}>
                    </TaskComponent>
            )
            }
                )}
            
            
            
            
            
            {/*<TaskComponent task={defaultTask1}></TaskComponent>*/}

            </tbody>
        </table>
        </div>
            </div>
            <TaskForm></TaskForm>
            </div>
            {/*Todo: aplicar un form/map para renderiz ar una lista */}
       
        {/*bueno aqui basicamente llame a Taskcomponent luego llame a task que la cree en task.jsx que me traera todo lo que puse el nombre etc todo eso y luego puse el detaulttask que es todo lo que puse aqui*/}
        </div>
    );
};





export default TaskListComponent;
