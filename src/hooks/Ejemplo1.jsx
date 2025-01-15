/**
 * ejemplo de uso del hook useState
 * 
 * Crear un componente de tipo funcion t acceder a su estado
 * privado a traves de un hook y ademas poder modificarlo
 */
// para usar los hooks primero se importan en este caso useState
import React, {useState} from 'react';

const Ejemplo1 = () => {
    
    // primero debo tener un valor inicial para un contador
    const valorInicial = 0;

    // valor inicial de una persona
    const personaInicial = {
        nombre : 'Martin',
        email : 'martin@imaginegroup.com'  
    }

    /**
     * queremos que el valor inicial y personainicial sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * 
     * const [variable, funcionParacambiar] = useState[valorinicial]
     *  
     */

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)
    
    /**
     * Funcion para actualizar el estado privado que contiene el contador
     * 
     */
    function incrementarContador(){
        //? funcionParaCambiar(nuevoValor)
        setContador(contador +1);
    }

    /**
     * Funcion para actualizar el estado de la persona en el componente
     */

    function actualizarPersona(){
        setPersona(
            {
                nombre: 'pepe',
                email: 'pepe@imaginagroup.com'
            }
        )
    }





    
    return (
        <div>
            <h1>***ejemplo de useState()***</h1>
        <h2>
            contador: {contador}
        </h2>

        <h2>
            Datos de la persona:
        </h2>
        <h3>
            Nombre: {persona.nombre}
        </h3>
        <h4>
            Email: {persona.email}
        </h4>
        {/*bloque de botones para actualizar estado*/}
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
        {/* asi se llama una funcion a un boton con {}*/}
        </div>
    );
}

export default Ejemplo1;
