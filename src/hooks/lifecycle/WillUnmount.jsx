/**
 * ejemplo de uso del metodo component willamount para componente clase
 * ejemplo de uso de hooks para componente funcional o de tipo funcion
 * [este willamount se aplica cuando el componente va a desaparecer]
 */

import React, { Component,useEffect } from 'react';

export class WillUnmount extends Component {
    //tipo clase
    componentWillUnmount(){
        console.log('comportamiento antes de que el componente desaparezca')
    }
    
    
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}




export const WillUnmounthook = () => {
    useEffect(() => {
    return() => {// aqui si usaremos el return en esta funcion en willunmount aqui pondre todo lo que quiero que retorne antes de que el componente desaparezca
    console.log('comportamiento antes de que el componente desaparezca')
    }
        
    },[]);
    
    
    
    return (
        <div>
            <h1>willUnmount</h1>
        </div>
    );
}





