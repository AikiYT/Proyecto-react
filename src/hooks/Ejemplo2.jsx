/**
 * Ejemplo de uso de:
 * -useState{}
 * -useRef{}
 * -useEffect{}
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    
    // vamos a crear dos contadores distintos
    // cada uno con un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    // vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();



    // aqui creare dos funciones que usare para incrementar mi s2 contadores

    function incrementar(){
        setContador1(contador1 +1);
    }

    function incrementar2(){
        setContador2(contador2 +1);
    }


    /**
     * Trabajando con UseEffect
     */


    /**
     * ? caso 1: ejecutar SIEMPRE un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente
     *  se ejecuta aquelllo que este dentro del useEffect()
    
     */

    useEffect(() => {
        console.log('cambio en el estado del componente');
        console.log('Mostrando referencia a elemento del DOM:')
        console.log(miRef);
    })

    /**
     * ? caso 2: ejecutar SOLO CUANDO CAMBIE CONTADOR1
     *  Cada vez que haya un cambio en contador 1 , se ejecuta lo que le diga el useEffect
     * en caso de que cambue el contador 2 no habra ejecucion
     */

    useEffect(() => {
        console.log('cambio en el estado del componente 1');
        console.log('Mostrando referencia a elemento del DOM:')
        console.log(miRef);
    }, [contador1]); // aqui pongo esto y cuando actualize el contador1 saldran estos logs, para eso es el useEffect
    // esos mensajes se imprimiran en la consola
    // no podemos realmente tener tantos use Effect ya que solo el ultimo que cree es el que se ejecutara


    /**   es lo mismo que el caso 2 solo que puse el contador 2 tambien
     * ? caso 3: ejecutar SOLO CUANDO CAMBIE CONTADOR1 y contador2
     *  Cada vez que haya un cambio en contador 1 , se ejecuta lo que le diga el useEffect
     * en caso de que cambue el contador 2 no habra ejecucion
     */

    useEffect(() => {
        console.log('cambio en el estado del componente 1 y 2');
        console.log('Mostrando referencia a elemento del DOM:')
        console.log(miRef);
    }, [contador1, contador2]); // aqui pongo esto y cuando actualize el contador1 saldran estos logs, para eso es el useEffect
    // esos mensajes se imprimiran en la consola
    // no podemos realmente tener tantos use Effect ya que solo el ultimo que cree es el que se ejecutara



    
    
    
    return (
        <div>
            <h1>ejemplo de useState(), useRef() y useEffect()</h1>
            <h2>
            Contador 1: {contador1}
            </h2>
            <h2>
            Contador 2: {contador2}
            </h2>
            {/* elemento referenciado */}
            <h4 ref={(miRef)}>
                ejemplo de elemento referenciado
            </h4>
            {/*botones para cambiar los contadores*/}
            <div>
            <button onClick={incrementar}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>

            </div>
        </div>
    );
}

export default Ejemplo2;
