import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StateProps = () => {
    
    const location = useLocation();

    console.log(location.state.online)
    console.log(location.search) // en el home basicamente puse toda la logica y en este componente simplemente dije que me trajera lo qeu esta dentro
    // es decir este componente es una prueba de que desde otro componente mediante parametros gracias a eso le puedo pasar valores de alla llamandolos con location y todo eso como alla puse tal cosa de true etc aca se usara gracias a uselocation
    // son maneras distintas de pasar info
    
    return (
        <div>
            <h1>state: {location.state.online ? 'the user is online' : 'the user is offline'}</h1>

        </div>
    );
}

export default StateProps;
