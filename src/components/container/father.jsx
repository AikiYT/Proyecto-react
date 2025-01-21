import React, { useState } from 'react';
import Child from '../../pure/child';


const Father = () => {

    const [name,setName] = useState('iverson');       
    //  aqui lo que hice fue un useState para actualizar el nombre

    
    function showMessage(text){
        alert(`message received: ${text}`)
    }
    
    function updateName (newName){
        setName(newName)
        // aqui lo actualize
    // como el hijo tiene algo similar se le heredara el nyuevo nombre
    }
    
    
    
    return (
        <div style={{background: 'tomato', padding: '10px'}}>
        <Child name={name} send={showMessage} update={updateName}></Child> {/*mira aqui puse child por child.jsx lo puedo pintar pomiendo esto simplemente como se llama me aparecera su mismo nombre pero en mayuscula la primera letra y asi puedo pintarlo*/}
        </div>                                  // y al final le pase el prop update con el metodo para que el hijo lo tenga tambien
    );                          // vez aqui en el padre esta el send que enviare al send de child.jsx este metodo cuando lo llame alla en el hijo con un send
}

export default Father;


