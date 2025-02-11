import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate()
    const location = useLocation() // este const imprimira en la consola en que ruta estamos por eso el location.pathname en el consolelog
        console.log('we are in route:', location.pathname) // 'abot | faqs
    
        const navigateProps = (path) => {
             // aca lo que hare sera pasarle cosas de una pagina a otra
            navigate(path, { //url
              search: '?online=true', // son los parametros de la url
            state: { online: true }, // pasamos los datos a la nueva pagina que se llama stateProps
            });
            };
        
        const goTo = (path) => {
            navigate(path); // funcion para volver atras solo pongo navigate y el parametro
        };
        
    
    return (
        <div>
            <h1> Home Page</h1>
            <button onClick={() => navigateProps('/online-state')}>go to page with state / query params</button>
            <button onClick={()=> navigate('/profile')}>
                go to profile
            </button>
            
            
        </div>
    );
}

export default HomePage;
