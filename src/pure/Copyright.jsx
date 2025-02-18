import React from 'react';
//material mui components
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography'



const CopyrightPage = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
        {
            'copyright (C)'
        }
        <Link color='inherit' href='https://imaginaformacion.com'>
            Imagen Formacion
        </Link>
        {''}
        {new Date().getFullYear()}
        {/* eso es para poner la fecha si pongo getfullday o algo cambia peero en este caso solo puse ano */}

    
    </Typography>
    );
}

export default CopyrightPage;
