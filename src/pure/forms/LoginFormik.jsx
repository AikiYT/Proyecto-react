import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('invalido email').required('email es requerido xd'),
        password: Yup.string().required('inavalida contrasena')
    }  // bueno este es el yup sera para cuando quiero que cierta cosa sea requerida o obligatoria de poner
    // lo primero que se hace es llamar lo que quiero es decir email y password, luego pongo yup.y el tipo en este caso quiero que sean strings
    // luego .email para el email y para la passwoed solo puse requerido y dentro del ('pongo el mensaje por si no lo pone')
);




const LoginFormik = () => {
    const initialCredentials = {
        email: '', // cree este mini componente con estas variables y al llamare aqui abajo
        password: '',
    }
    
    const history = useNavigate();
    
    
    
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials} // Aquí en el Formik primero debo llamar lo que quiero, en este caso a ese componente dentro del initialValues.
                // * Yup validación esquema
                validationSchema={loginSchema}
                onSubmit={async (values) => { // Aquí lo que está diciendo es que este Formik tendrá este evento onSubmit que buscará los valores de ese mini componente que llamé.
                    await new Promise((r) => setTimeout(r,1000)); // Aquí le dice que espere la respuesta.
                    alert(JSON.stringify(values, null, 2)); // Y al final me tirará una alerta en formato JSON.
                    
                    
                    // guardamos los datos en el navegador local en la terminal del navegador
                     await localStorage.setItem('credentials', values); // aqui en el submit digo si ya me registre y todo guarda todo esto osea setitem en el navegador local las credentials y todos los valores que puse
                    navigator('/profile')
                }}
                
            >
                {/* Obtendremos props del Formik */}
                {props => {
                    const {
                        values,
                        touched,
                        errors,  // Aquí controlamos todo, es como un manejo de errores en cada evento de esto. Si obtiene un valor nos dirá tal cosa si pone el mouse, etc.
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props;
                    return (
                        <Form>  
                            <label htmlFor="email">Email</label> 
                            <Field id="email" type="email" name="email" placeholder="example@gmail.com" />

                            {/* Aquí usé las propiedades errors y touched para ver si pasa un error en el email */}
                            {errors.email && touched.email && ( // si pasa esto lanzara un div y un parrafo con el error
                                <div className='ERROR'>  
                                    <p>{errors.email}</p>
                                </div>
                            )}

                            {/* Bueno, acá creé un form, puse label type email y abajo otro tipo password */}

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
                        {/* aqui basicamente use que si esta submit osea esta cargando la pagina te acuerdas y puedo aumentar el tiempo que se carga arriba en el settimeout tirara tal mensaje si lo esta le mandara ese <p> sino tirara un null*/}
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default LoginFormik;