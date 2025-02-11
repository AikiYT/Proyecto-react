import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const goTo = (path) => {
        navigate(path); // funcion para volver atras solo pongo navigate y el parametro
    };
    
    const goBack = () => {
    navigate(-1); // para volver atras solo pongo navigate y -1
    };
    
    
    
    return (
        <div>
            <h1>404 - page not found</h1>
        <button onClick={()=> navigate('/')}>go back to home</button>
        
        </div>
    );
}

export default NotFoundPage;
