import React, {useState} from 'react';

let red = 0;
let green = 200;
let blue = 150;




//? estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`, // esto me permite usar el rgb esas concatgenaciones es para poder usar el rojo el azul y el verde que deglare alla arriba
    color: 'white'
};

//? estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}




// mejora del codigo de ahi abajo del update y el if y el else
const LoginButton = ({LoginAction,propStyle}) => {
    return (
        <button style={propStyle} onClick={LoginAction}>login</button>
    )
}

const LogoutButton = ({LogoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={LogoutAction}>logout</button>
    )
}


// ? (Expresion true) && expresion => se renderiza la expresion
// ? (expresion false) && expresion => no se renderiza la expresion



// definiendo estilos en constantes

//? Estilo para usuario logueado







const OptionalRender = () => {
  
    const [access,setAccess] = useState(false); // lo puse falso para que no tenga acceso desde un inicio
    const [nMessage,setNMessages] = useState(0);

    
    const LoginAction= () => {
        setAccess(true)
    }

    const LogoutAction= () => {
        setAccess(false)
    }


    


    const UpdateAccess = () => { // cree esat funcion que pregunta si haces es verdaderoo falso con ese icono !
    setAccess(!access)
    
    }

    let optionalButton;
    // if(access){
    //     optionalButton = <button onClick={UpdateAccess}>logout </button>
    // }else{
    //     optionalButton = <button onClick={UpdateAccess}>login </button>

    // }
// aqui basicamente declare la variable optional button y le dije si acces es verdadero pon este botton y si le dan click que ponga el otro en el else
// pero lo ideal es que este else y if esten en componentes distintos mira arriba para que veas que hice en el video 12

if(access){
    optionalButton = <LogoutButton propStyle={unloggedStyle} LogoutAction={LogoutAction}></LogoutButton>
}else{
    optionalButton = <LoginButton propStyle={loggedStyle} LoginAction={LoginAction}></LoginButton>
}
                        // si te fijas llame el parametro propstyle eso me permitio usar las funciones de logoutstyle y unlogout style

// Unread messages
let addMessages = () => {
setNMessages(nMessage + 1)
}



    
    return (
        <div>
            {/*optionalbutton*/}
            {optionalButton}

            {/*n messages unread*/}
            {/* {nMessage > 0 && nMessage === 1 && <p>you have {nMessage} new messages</p>}
            {nMessage > 1 && <p>you have {nMessage} new messages</p>}
            {nMessage === 0 && <p>there are no new messages</p>} */}
            {/*Ternay operator*/}
            {access ? (<div>  {/* aqui puse si tiene acceso pinta todo esto si no ponlo null y meti toda la logica dentro de un (y un div)*/}
                {nMessage > 0 ?
            <p>you have {nMessage} new message{nMessage >1 ? 's': null}...</p> : // basicamente este operador ternario qu ees el : dos puntos dice si nmessages >0 ? si es verdad se pone el primer <p> si es mentira el otro
            <p>there no are no new messages</p>
            }   

                
            
            <button onClick={addMessages}>{nMessage ===0 ? 'add your firts message': 'add new message'}</button> {/* tambien en un button puedo poner operadores ternarios*/}
            </div>) : null}
            
        </div> 
    );
}

export default OptionalRender;
