export const getAllUsers = async () => {
    
    let response = await fetch('https://reqres.in/api/users');
    console.log('response', response) // esto lo hice para ver que trae simplemente
    console.log('response:', response);
    console.log('status', response.status);
    console.log('Ok?', response.ok) // estos console es para ver si todo esta bien en la repsuesta
    
    
    // pasamos el json
    return response.json() // y al final se pone que me retorne la respuesta en json
} // bueno basicamente el fetch se hace asi la fu cion async la respuesta que espera un fetch le paso el url




export const getAllPagedUsers = async (page) => {
    
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('response', response) 
    console.log('response:', response);
    console.log('status', response.status);
    console.log('Ok?', response.ok) 
    
    
    // pasamos el json
    return response.json() 
} 



export const getUserDetails = async (id) => {
    
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('response', response) 
    console.log('response:', response);
    console.log('status', response.status);
    console.log('Ok?', response.ok) 
    
    
    // pasamos el json
    return response.json() 
} 


//video 21
// busca regres.in es la api que estoy usando
export const login = async (email, password) => {

    let body  = { // lo primero que hice fue el body que es basicamente un constructor puse email y password pero tambien podria poner email: Email ya sbaes
    
    email: email,
    password: password

    }

    let response = await fetch(`https://reqres.in/api/login`, {
        method: 'POST', // aqui basicamente estoy configurando como sera la respuesta sera de tipo post y le puse todas esas otras configuraciones
        //mode: 'no-cors',   
        //credentials: 'omit', // el omit es que no tenga en cuenta si hay credenciales
        //cache: 'no-cache',
         headers: { // las cabezeras nos dara las claves, o patrones de seguridad investiga mas
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body) // y aqui llamo al body para implementar lo de email y password de la api
        // eso de el stringtfy es que lo que voy a mandarle a la api basicamente se usa para convertir este body en un formato json para que la api admta bien todo lo de el email y la contrasena
    });
    console.log('response:', response);
    console.log('status', response.status);
    console.log('Ok?', response.ok)

    return response.json();


    // luego isntale axios cuadno ya todo me funciono

}