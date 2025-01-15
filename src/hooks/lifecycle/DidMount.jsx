/**
 * ejemplo de uso del metodo
 * de ciclo de vida en componente de clase y el hook de ciclo de vida
 * en componente funcional
 * 
 */  //ejemplo de tipo clase de lifecycle

import { cleanup } from '@testing-library/react';
import React, { Component, useEffect } from 'react';
 //tipo clase
export class DidMount extends Component {
    componentDidMount(){
        console.log('comportamiento antes de que el componente sea anadido al DOM renderizado')
    }



    render() {
        return (
            <div>
                <h1>
                    DidMount
                </h1>
            </div>
        );
    }
}


//tipo funcion
export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea anadido al Dom(renderize')
        return () => {
        
        }
    }, [])
    
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}


