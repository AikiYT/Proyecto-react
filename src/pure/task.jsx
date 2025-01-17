// lo primero que hice fue escribir rfcp y se creo esta estructura

// importamos la hoja de estilos de task.scss
import '../styles/task.scss'



import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import { LEVELS } from '../models/levels.enum';


const TaskComponent = ({task}) => { // esto aqui este task nos servira para poder poner tu sabe el task. tal cosa etc
    

    useEffect(() => {
        console.log('create task')
        return() => {
            console.log(`task:  ${task.name}is going to unmount `)
        }
            
        },[task]);  // cada modificacion que alla en task se hara este effect
    
    /**
     * funcion que devuelve una badge
     * dependiendo de el nivel de la tarea osea de mi variable Level
     */
    function taskLevelBadge(){
    switch (task.level) {   // basicamente esta funcion lo que hara en caso de que el nivel
        case LEVELS.NORMAL:
            
            return(<h6 className='mb-0'>
                <span className='badge bg-primary'>
                    {task.level}
                </span>
            </h6>)
            
            case LEVELS.URGENTE:
            
            return(<h6 className='mb-0'>
                <span className='badge bg-warning'>
                    {task.level}
                </span>
            </h6>)

            case LEVELS.BLOCKING:
            
            return(<h6 className='mb-0'>
            <span className='badge bg-danger'>
                {task.level}
            </span>
            </h6>)
    
        default:
            break;
    }
    }
// y la funcion se la pondre donde iria el task.level pero en vez de eso pondre esta funcion ya que tiene toda la logica


// otra funcion esta lo que hara sera eso del boton que se cambie cuando este completed o pending ya sabes
function taskcompleted(){
    if(task.completed){
        return (<i className='bi-toggle-on' style={{color: 'green'}}></i>)
    }else{
        return (<i className='bi-toggle-off' style={{color: 'red'}}></i>)
    }
    }









                // fw es font weight normal y ms=2 es margin
    return (
       <tr className='fw-normal'>
       <th>
       <span className='ms-2'> {task.name}</span>
       </th>
       
        <td className='align-middle'>
        {/* aqui sustituire con un badge de bootstrap*/}
        <span> {task.description}</span>

        </td>
        <td className='align-middle'>
        {taskLevelBadge()}     {/*aqui la puse la funcion*/}

        </td>
        <td className='align-middle'>
                
        {taskcompleted()}
                {/* Aqui literalmente dije si task esta completo pongo este icono de bootrap que se pone con <1> y busco en nombre del icono que quiero en google en este caso puse ese que es como que marca y asi pones iconos de bootrap */}

                
        {/* este icono es el rojo de basura lo traje*/}
        (<i className='bi-trash' style={{color: 'tomato'}}></i>) 
        
        
        

        </td>

       </tr>
       
     
    ); // en ese h5 basicamente le pregunta si esa tarea esta completafa que diga si esta o sino si esta pendiente
};


TaskComponent.propTypes = {
task: PropTypes.instanceOf(Task) // instance off es cuando no le especifico si es string o algo asi en este caso quiero que sea una tarea osea task no nada de eso de string ni nada
};


export default TaskComponent;
