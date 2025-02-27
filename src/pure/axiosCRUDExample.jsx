import React from 'react';
import { createUser, DeleteUsers, getAllPageUsers, getAllUsers, getUsersByID, loginCrud, UpdateUser } from '../Services/axiosCRUDservice';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


const AxiosCRUDExample = () => {
    
    const initialCredentials = {
        email: '', // cree este mini componente con estas variables y al llamare aqui abajo
        password: '',
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('invalido email').required('email es requerido xd'),
            password: Yup.string().required('inavalida contrasena')
        }  // bueno este es el yup sera para cuando quiero que cierta cosa sea requerida o obligatoria de poner
        // lo primero que se hace es llamar lo que quiero es decir email y password, luego pongo yup.y el tipo en este caso quiero que sean strings
        // luego .email para el email y para la passwoed solo puse requerido y dentro del ('pongo el mensaje por si no lo pone')
    );

    
    
    const authUser = (values) => { // puse values ya que trajimos todo eso de alla abajo recibiriamos los usuarios y todo eso
        //loginCrud("eve.holt@reqres.in","cityslicka")
        
        loginCrud(values.email, values.password) // como esta arriba comentando seria la manera clasica ponerle donde esta email y password de parametros como esta en la api pero como trajimos eso de formik usamos value.tal cosa y asi en vez de usar las palabras de la api
        .then((response) => {     // pero si queremos que funcione en el email hay que poner como la clave del api y la passwrod igual sino salta error xd
        if(response.data.token){
            alert(JSON.stringify(response.data.token)) // el token no es necesario pero en este caso como quiero guardarlo lo puse
            sessionStorage.setItem('token',response.data.token) // aqui lo guarde esa respuesta en el sesion sotrage eso qeu me trajo la respuesta eso le veo dandole a inspeccionar y ver la consola en aplicacion almacinamiento y busco el sesionstorage
        }else{
            sessionStorage.removeItem('token') // sino lo borrara del sesionstorage
            throw new Error('el login fallo')
        }
            
        })
        .catch((error) => {
            alert(`algo a ido mal: ${error}`)
    })
        

        .finally(() => {
            console.log('todo a ido bien')
    })

}


// Crud metodos

const obtainAllUsers = () => {
    getAllUsers()
    .then((response) => {
        alert(JSON.stringify(response.data.data)) // hay dos data porque si revisamos la api esta dentro de data
    })
    .catch((error) => alert(`algo fallo: ${error}`))
}

const obtainAllPagedUsers = (page) => {
    getAllPageUsers()
    .then((response) => {
        alert(JSON.stringify(response.data.data)) // hay dos data porque si revisamos la api esta dentro de data
    })
    .catch((error) => alert(`algo fallo: ${error}`))
}



const obtainUserByID = (id) => {
    getUsersByID(id)
    .then((response) => {
        alert(JSON.stringify(response.data.data)) // sigue siendo data.data segun la api
    })
    .catch((error) => alert(`algo fallo: ${error}`))

}


const obtainCreateUser = (name, job) => {
    createUser(name, job)
    .then((response) => {   // es bueno poner el status en todos pero solo lo puse aqui xd
        if(response.status === 201){ // comprueba lo de el status
            alert(JSON.stringify(response.data)) // en este caso solo se necesita el data hay que revisar bien la api       
        }
        else{
            throw new Error('usuario no creado')
        }
        
    })
    .catch((error) => alert(`algo fallo: ${error}`))
}



const updateUserByid = (id, name, job) => {
    UpdateUser(id, name, job)
    .then((response) => {
        alert(JSON.stringify(response.data))  //solo data segun la api para este caso
    })
    .catch((error) => alert(`algo fallo: ${error}`))

}


const deleteUserbyid = (id) => {
    DeleteUsers(id)
    .then((response) => {
        alert(`el usuario con el id: ${id} se ha borrado`)  //solo data segun la api para este caso
    })  // aqui no necesito de response.data ni nada esto lo borra y ya
    .catch((error) => alert(`algo fallo: ${error}`))

}




    
    
    
    
    
    // basicamente copie lo qeu hice en loginFormik.jsx para hacer el login jevi
    // lo que cambie fue que en el obsummit puse mi metodo que hice el authUSer
    
    
    
    
    
    
    
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials} 
                // * Yup validación esquema
                validationSchema={loginSchema}
                onSubmit={async (values) => { 
                    authUser(values)  // puse el metodo aqui y le puse que recibira los valores
                }}
                
            >
                
                {props => {
                    const {
                        values,
                        touched,
                        errors,  
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props;
                    return (
                        <Form>  
                            <label htmlFor="email">Email</label> 
                            <Field id="email" type="email" name="email" placeholder="example@gmail.com" />

                            
                            {errors.email && touched.email && ( 
                                <div className='ERROR'>  
                                    <p>{errors.email}</p>
                                </div>
                            )}

                            

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"  // Acá lo mismo pero con password
                                placeholder="password"
                                type="password"
                            />  

                            {/* Aquí usé las propiedades errors y touched para ver si pasa un error en la password */}
                            {errors.password && touched.password && (
                                <div className='ERROR'>  
                                    <p>{errors.password}</p>
                                </div>
                            )}

                            <button type="submit">Login</button>  
                        {isSubmitting ? (<p>registra tus credenciales...</p>): null}
                        
                        </Form>
                    );
                }}
            </Formik>
            
            {/* ejemplps de botones para testear las respuestas de las apis */}
            <div>
            {/* todo esto se ve en inspeccionar y en la parte de red al darle al boton se abrira algo llamado user y ahi vez si funciono y trajo todo*/}
                    <button onClick={obtainAllUsers}>
                        obtener usuarios
                    </button>
                    <button onClick={obtainAllPagedUsers}> {/* le puedo poner al lado de el metodo el (1) y el numero de la pagina pero por alguna razon al hacerlo antes de darle al boton lo hace solo skajskas averigua eso pero por defecto obtiene la pagina 1 */}
                        obtener usuarios por pagina (Page 1)
                    </button>

                    <button onClick={obtainUserByID}> {/* acuerdate del (1) esque me da error por eso se lo quite*/} {/* le pase el id 1*/}
                        get user 1
                    </button>

                    <button onClick={obtainCreateUser('iverson', 'programador')}>crear usuario</button>
                        
                        <button onClick={updateUserByid(1,'joni', 'programa')}> {/* pongo el id del que quiero actaulizar el nombre y el job*/}
                            actualizar usuario
                        </button>
                        
                        <button onClick={deleteUserbyid(1)}> {/*pongo el id que quiero borrar*/}
                            borrar usuario
                        </button>                           {/* aca le puse el nombre y el job directamente lo puse aqui ya que no tengo imput ni na xd*/}
            </div> 
        </div>
    );
}

export default AxiosCRUDExample;
