/**
 * ejemplo de uso de metodo componentDidUpdate en componente clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';
// tipo clase
export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }
    
    
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


//tipo funcion

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('')
        
    }); // aqui no estan los [] para que asi el useEffect sepa que quiero que se realiza todas las veces que use este update no lo que le ponga en lo s[]
    
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}




