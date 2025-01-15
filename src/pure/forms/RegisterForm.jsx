import React, { useState } from 'react';

const RegisterForm = () => {
    const initialData = {
        user: '',
        name: '',
        email: '',
        password: ''
    };

    const [data, setData] = useState(initialData);

    return (
        <div>
            {/* Aquí podrías agregar inputs para el formulario */}
        </div>
    );
};

export default RegisterForm;
