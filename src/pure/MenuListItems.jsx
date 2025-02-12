import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {Home, Settings } from '@mui/icons-material';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const getIcon = (icon) => { // la idea es que reutilizare esta funcion para cada elemento de la lista que hare
    switch (icon) {
        case 'HOME':
            return (<Home/>)
        
        case 'TASKS':
                return (<Home/>)

        case 'SETTINGS':
                return (<Settings/>)
            
        
    
        default:
            return (<Home/>)
    }
}

const MenuListItems = ({list}) => {

    const history = useNavigate(); // si no te funciona acierdate de revisar esto
    
    const navigate = (path) => {
    navigate(path)
    }
    return (
        <List>
        {list.map(({ text, path, icon }, index) => ( // pongo los elemento que seran mapeados
            <ListItem key={index} button onClick={() => navigate(path)}> {/* listitem para la key siempre tiene que  una de estas con e l index */}
                <ListItemIcon>{getIcon(icon)}</ListItemIcon> {/* el listitem icon par alos iconos pongo la funcion que ice arriba y le ppaso de parametro el icon*/}
                <ListItemText primary={text} /> {/* y itemtext para el texto primero se pone primary y lueog el parametro text */}
            </ListItem>
        ))} {/* basicamente este componente dependiendo de que valores llame pintara una cosa u otra este mapeo de aca devolvera una lista*/}
        </List>
    );
    };

    export default MenuListItems