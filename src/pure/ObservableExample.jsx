import React, { useState } from 'react';
import { getNumbers } from '../Services/observableService';

const ObservableExample = () => {
    const [number, setNumber] = useState(0);  
    
    const obtainNumbers = () => {
        console.log('suscribtion to observable')
        getNumbers.subscribe({ //bien aca llame a la funcion que tengo en el js.suscribe 
            next: (newNumber) => {  // aca puse next esto me guardara esta variable new number y se usara para cada vez que ese newnumber se actualize gracias a la funcion de alla
                console.log(`New number:`, newNumber); // estos console son para probar
                setNumber(newNumber); // actualizo number con newnumber
            },
            error: (error) => { // en caso de error
                alert(`Something went wrong: ${error}`);
            console.log('error')
            },
            complete: () => { // y cuando se complete mostrara ahora como esta number
                alert(`Finally: ${number}`);
                console.log('done with the observable')
            }
        });
    };

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNumbers}>obtener new numbers</button>
        </div>
    );
};

export default ObservableExample;
