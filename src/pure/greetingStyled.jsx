import React, { useState } from 'react';


// definiendo estilos en constantes

//? Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
};

//? estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}






const GreetingStyled = (props) => {
    
    // Generamos un estado para el componente asi controlar cuando se le aplicara el color de si esta logueado o no
const [logged, setlogged] = useState(false)  //le puse false para que el estado este que no esta logueado       
    



    return (
        <div Style={logged ? loggedStyle : unloggedStyle}>
            {/* aqui pregunta si esta logged? si lo esta se le aplicara loggedstyle sino unloggedstyle */}
        <p>hola, {props.name}</p>
        <button onClick={() =>{
        console.log('boton pulsado')
        setlogged(logged)
        }}>
            {logged ? 'logout' : 'login'}
            {/*si esta logeado el boton dira logout sino login*/}
        </button>
        
        </div>
    );
}

export default GreetingStyled;
