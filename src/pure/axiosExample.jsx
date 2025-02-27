import React  from 'react';
import { useState, useEffect } from 'react';
import getRandomUser from '../Services/axios-service';

const AxiosExample = () => {
    
    const [user, setUser] = useState(null);

            useEffect(() => {
         obtainUser() // lo primero que se renderize sea esto
        
        }, []);// dejo eso vacio para que se ejecute 1 vez acuerdate

    
    const obtainUser = () => {
        getRandomUser()
        .then((response)=> {
            if(response.status === 200){
                setUser(response.data.results[0]) // aqui actualizo a user tiene ese array porque traere un sin numero de users y ese.results esque asi esta en esa api de usersramdom hay que acceder a esa propiedad results si queremos los users es un lio xd
            }
            
        } )
        .catch((error) => {
            alert(`algo salio mal: ${error}`);
        })
    }
    
    
    return (
        <div>
            <h1>obten tu usuario ramdom</h1>
            {user != null ? // si user es diferente de null que pinte esto eso de user.title etc acuerdate uso user como objeto y luego del. lo de la api
            (
            <div>
                <img alt='avatar' src= {user.picture.large} /> 
                <h2>name:{user.title} {user.firts} {user.last}  
                {user.email} 
                </h2>
                </div>
            )
            :
            (
                <div>
                    <p>genera un nuevo usuario</p>
                    <button onClick={obtainUser}>genera un ramdom user</button> {/* el boton que genera los user */}
                </div>
        
            )}

            
        </div>
    );
}

export default AxiosExample;
