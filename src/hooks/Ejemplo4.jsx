/**
 * ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>
                Ejemplo de Children PROPS
            </h1>
            <h2>
            Nombre: {props.nombre}
                {/*props.children pintara por defecto
                aquello que se encuentre entre las etiquetas de apertura y cierre
                de este componente desde el componente de orden supeior*/}
                {props.children}
            </h2>
        </div>
    );
}

export default Ejemplo4;
