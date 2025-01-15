import React, { useState } from 'react';
import PropTypes from 'prop-types';







const Funciongreeting = (props) => { // aqui debo poner promps ya que aqui nose usa this. que si yo que aqui uno debe hacerlo manualmente al ser una funcion
    
    // breve instroduccion a useState aqui no es como las clases aqui necesitamos esto para modificar el estado
    // const[variable,metodo para actualizarla] useState[valor inicial] asi sera siempre
        const [age, setage] = useState(19);
        
        const birthday = () => {
            //actualizamos el valor
            setage(age +1)
        }
    
    
    
    
    
    
    return (    // osea cada vez que quiera llamar una variable o algo debo primero poner porps y un .
        <div> 
        <h1>
        hola {props.name}  Desde componente funcional
        </h1>
        <h2>tu edad es de: {age} </h2>
        
        <div>
            <button onClick={birthday}> 
                cumplir anos 
            </button>
        </div> 
    </div>          
    );
};


Funciongreeting.propTypes = {
name: PropTypes.string
};


export default Funciongreeting;

