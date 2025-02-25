import React, { useState, useEffect } from "react";
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from "../Services/fetchService"; // esporto lo que traje de fetch service el metodo

const FetchExample = () => {
    const [users, setUsers] = useState([]); // Inicializar como array
    const [selectedUser,SetselectedUser] = useState({});
    const [pages,setPages] = useState(2);
    const [totalUsers, settotalUsers] = useState(12);
    const [usersperPage, setusersPerPage] = useState(6);



    
    useEffect(() => {
    obtainUsers();  // este useEffect es para que cuando empieze la renderizacion lo primero que haga sea esto
    }, []);

  const obtainUsers = () => { // este metodo obtainNumber tiene el metodo que traje del service el getallUsers
    getAllUsers()
    .then((response) => {
        console.log("All users:", response.data); // esto lo hice para ver que trae simplemente
        setUsers(response.data); // Guardar los datos correctamente puse data porque eso es lo que me devuelve los users en la api si fuera otra cosa tendria que ver que serai en vez de data
        setPages(response.total_pages) // en  vez de data para las pages es esto
        settotalUsers(response.total) // y asi con estr hay que ver en la api
        setusersPerPage(response.data.length);
    })// que le llegue el response y ya si pasa que se actaulizr rl estado del users con la data usamos data aqui cuando se brega con las apis
    .catch((error) => {
        alert(`Error mientras se buscaban: ${error}`);
    })
    .finally(() => {
        console.log("Se ha completado la obtención de usuarios");
    });
    };

    const obtainPagedUsers = (page) => { // ese page que lo puse como parametro alla en el service y aqui lo uso asi me servira para despues en el return poner el numero de la pagina asi como esta alla abajo
        getAllPagedUsers(page)
        .then((response) => {
            console.log("All users paged users:", response.data); // esto lo hice para ver que trae simplemente
            setUsers(response.data); 
            setPages(response.total_pages) 
            settotalUsers(response.total)          // esto se lo pongo a obtain page porque quiero que en todas las paginas se muestre todo eso
            setusersPerPage(response.data.length);
        })            
        .catch((error) => {
            alert(`Error mientras se buscaban: ${error}`);
        })
        .finally(() => {
            console.log("Se ha completado la obtención de usuarios");
        });
        };


    const obtainDetailsUsers = (id) => {
        getUserDetails(id)
        .then((response) => {
        console.log("All users paged users:", response.data); 
        SetselectedUser(response.data)  // aqui puse el selected user y ahora como lo que quiero esque muestre info del user cuando le de click ire al mapeo mira abajo y pondre este metodo
        
    })
    .catch((error) => {
        alert(`Error mientras se buscaban: ${error}`);
    })
    .finally(() => {
        console.log("Se ha completado la obtención de usuarios");
    });
    };


    const authLogin = () => {
        login('eve.holt@reqres.in', 'cityslicka') // aqui hice una funcion para el login llame el metodo login que hice en fetchservice y llamae a los parametros que tenia email y password pero en vez de llamarlos directamente igual que alla llame a como estan en la api en la parte de login succesful entra en regres.in y sabras de que hablo en los metodos post
        .then((response) => {
            console.log("Token:", response.token); // aca lo que recibira es un token
            sessionStorage.setItem('token', response.token) // aqui lo guarde en el sesionstorage
            
        })
        .catch((error) => {
            alert(`Error mientras se buscaban: ${error}`);
        })
        .finally(() => {
            console.log("ended obtaining login user");
        });
        };
    

    




    

    return (
    <div>
    {/* simulando el boton de login*/}
    <button onClick={authLogin}>Auth user</button>






    <h2>Users:</h2> {/* este mapeo basicamente digo que me mapee users que tiene todo le paso user3 que usare como mini objeto y luego llamo a los elementos del http que quiero que muestre*/}
    {users.map((user3, index) => (
        <p key={index} onClick={() => obtainDetailsUsers(user3.id)}> {/* asi puse el metodo de obtener detalles en el p y le paso el user3 para cada click que de me funcione y ahora abajo hare un div donde se mostrara esos detalles*/}
        {user3.first_name} {user3.last_name}</p> // Corregido y con clave única
    ))} {/* todo esto de firts name viene del http que use ve el video 20 y sabras*/}
    

    <p>Showing {usersperPage} users of {totalUsers} in total.</p>
    <button onClick={ () => obtainPagedUsers(1)}>
        1
    </button>

    <button onClick={ () => obtainPagedUsers(2)}>
        2
    </button>
    <div>
        <h3>
    user details:
        </h3>
        {selectedUser && (
        <div>
        <p> name:{selectedUser.first_name}</p>
        <p>Last Name: {selectedUser.last_name}</p>
        <p>email: {selectedUser.email}</p>
        <img alt= 'avatar' src={selectedUser.avatar} style={{height: '150px', width: '150px'}} />
        
    </div>
    )}
    </div>
    </div>
    );
};
    
        


// la key se usa para ya llamar a lo que queira del api
export default FetchExample;

