/**
 * Ejemplo Hooks
 * - useState()
 * - useContext() usaremos este nuevo
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns componente 1
 * dispone de un contexto que va a tener un valor que  desde el padre
 */
const miContexto = React.createContext(null) // asi se declara algo que queremos que este vacio con context
const Componente1 = () => {
// inicializamos un estado vacio que va rellenarse con 
// los datos del padre

const state = useContext(miContexto);

    return (
        <div>
            <h1>
                el token es: {state.token}
            </h1>
            {/* pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {
    const state = useContext(miContexto);
    
    
    return (
        <div>
        <h2>
            la sesion es: {state.sesion}
        </h2>

        </div>
    );

}



export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234566',
        sesion:  1
    }

    // creamos el estado de este componente
    const [sesionData, setSessionData] = useState(estadoInicial);


    function actualizarSesion(){
        setSessionData(
            {
                token: 'jwt828js',
                sesion: sesionData.sesion +1
            }
        );

    }




    return (
    <miContexto.Provider value={sesionData}>
    {/*Todo lo que esre aqui dentro puede leer los datos de sesiondata */}
        {/* ademas si se actualiza los componentes de aqui tambien lo actualizan */}
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar sesion</button>

    </miContexto.Provider>
    )
}




