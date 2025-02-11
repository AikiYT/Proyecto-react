import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {
    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1); // para volver atras solo pongo navigate y -1
        };
    
        const goTo = (path) => {
            navigate(path); // funcion para volver atras solo pongo navigate y el parametro
        };
    
    return (
        <div>
            <h1>
                your profile
            </h1>
            <button onClick={()=> navigate('/Tasklist')}>your tasks</button>
            <button onClick={goBack}>
                go back
            </button>
        </div>
    );
}

export default ProfilePage;
