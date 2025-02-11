import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const AboutPage = () => {
    const navigate = useNavigate()
    const location = useLocation() // este const imprimira en la consola en que ruta estamos por eso el location.pathname en el consolelog
        console.log('we are in route:', location.pathname) // 'abot | faqs
    
       
        
        const goTo = (path) => {
            navigate(path); // funcion para volver atras solo pongo navigate y el parametro
        };
        
        const goBack = () => {
        navigate(-1); // para volver atras solo pongo navigate y -1
        };


        const goForward = () => {
            navigate(1)
        }
   
   
    return (
        <div>
            <h1>
                About | Faqs 
            </h1>
            <div onClick={()=> navigate('/')}> {/* el path alla es simplemente un parametro pero aqui le pase la raiz es decir el homepage y ira alla al darale al boton*/}
                <button>
                    go to home
                </button>
                <button onClick={goBack}>
                    go back
                </button>
                <button onClick={goForward}>
                    go forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
