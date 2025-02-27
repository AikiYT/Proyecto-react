import axios from "axios";

// hice este metodo para comunicarme con el endpoint
// aqui pondre la api que usare etc
 


// aca vi la api reqres.in y como quiero hacer un post vi que se necesita un email y un password enbtonces se pone de parametros
export const loginCrud = (email, password) => {
        
    let body = {
        email: email,
        password: password
    }
    
    // aqui retorne la promesa es decir como hare un post pongo el post el enlace a la api que usare para el login y luego puse el body que tiene el email y la password ya inicializados en ese mini constructor
    return axios.post('https://reqres.in/api/login', body)
}

// el TODO es una extension para marcar cosas que te faltan xd
// TODO aqui pronto tendremos todos los usuarios
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')// busque el enlace para hacer esto de la api
}



// TODO obtener todos los usuarios pero por paginas
export const getAllPageUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)// busque el enlace para hacer esto de la api
}


// TODO obtendremos usuarios por id
export const getUsersByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)// busque el enlace para hacer esto de la api
}
// TODO crearemos un user
export const createUser= (name, job) => { // segun la api pide el name y el job
    let body = {
        name: name,
        job: job   // lo mismo que en el login pero con name y job ya que la api lo pide asi
    }
    return axios.post('https://reqres.in/api/users', body)// busque el enlace para hacer esto de la api
}
//TODO actualizar el user
export const UpdateUser= (id, name, job) => { // segun la api pide el name y el job pero con la diferencia de que al actualizar pido el id
    let body = {
        id: id,
        name: name,
        job: job   // lo mismo que en el login pero con name y job ya que la api lo pide asi
    }
    return axios.put(`https://reqres.in/api/users/${id}`, body)// lo mismo que el de crear pero aca le concateno el id
}// tambien en vez de put se puede con patch pero hicimos el de patch con la api
// TODO borrar user
export const DeleteUsers = (id) => { // lo que recibe es el id y el metodo es delete
    return axios.delete(`https://reqres.in/api/users/${id}`)// busque el enlace para hacer esto de la api
}