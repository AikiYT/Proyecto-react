import React from 'react';
import Button from '@mui/material/Button';
import CopyrightPage from '../../../../pure/Copyright';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const DashBoardPage = () => {
    
    const navigate = useNavigate();
    
    const logout = () => {
        navigate('/login');

    }
    
    
    return (
        <div>
            <Button variant="contained" onClick={logout}>logout</Button>
        <CopyrightPage></CopyrightPage>
        </div>
    );
}

export default DashBoardPage;
