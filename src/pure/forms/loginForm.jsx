/**
 * componente que va a contener un formulario para
 * autenticacion de usuario
 */

import React, {useState} from 'react';

const LoginForm = () => {
    
    const initialCredentials = [
    {
user: '',
password: ''
    }
];

const [credentials, setCredentials] = useState(initialCredentials);

    
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
