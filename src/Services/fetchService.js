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