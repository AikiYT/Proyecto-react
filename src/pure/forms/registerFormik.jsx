import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
// modelo
import { User } from '../../models/user.class';
import { ROLES } from '../../models/roles.enum';

const RegisterFormik = () => {
   let user = new User();


    const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER,


}


const registerSchema = Yup.object().shape(
    {
        username: Yup.string().min(6, 'name too short').max(12, 'username too long').required('username is required'), // aca use el min y el max el min sera de 6 junto con su mensaje de error y el max de 12 y le puse tambien un required el min y el max es para que nose pasen de eso al poner el username
        email: Yup.string().email('invalido email').required('email es requerido xd'),
        
        role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'role required').required('role is required'), // en el yup del role se usa el one of y se llama todo lo que tiene el rol dentro en este caso user y admin
        
        password: Yup.string().min(8,'password too short').required('password is required'),
        
        confirm: Yup.string()
        .when("password", { // aqui le digo when osea cuando la contrasena y l epaso password para que sepa le digo si su valor y su largo es mayor a 0 es verdadero o falso
            is: value => (value && value.length > 0 ? true : false),
            then: () => Yup.string().oneOf( // si es verdadero pongo el yup.string() y el one oneof es que sea igual a la misma contrasena
                [Yup.ref("password")],// para que encuentre la contrasnea se pone la referencia para saber si es verdadero
                '!password must match' // mensaje de error si es falso

            )
        }).required(' you must confirm the password') // y esto es para que sea requerido el confirm

        // basicamente para resumir el confirm sera lo que usaremos para confirmar pongo la condicional when password tal cosa IS tal cosa entonces osea el then si es igual osea el oneof a lo que tengo guardado osea el yup.ref en el password se cumplira y al final el mensajito de error
    }
)


const submit = (values) => {
alert('register user')
}
   
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                validationSchema={registerSchema}

                
                onSubmit={async (values) => { // Aquí lo que está diciendo es que este Formik tendrá este evento onSubmit que buscará los valores de ese mini componente que llamé.
                    await new Promise((r) => setTimeout(r,1000)); // Aquí le dice que espere la respuesta.
                    alert(JSON.stringify(values, null, 2)); // Y al final me tirará una alerta en formato JSON.
                    
                    
                
                }}
            >

            {({ values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur }) => (
                <Form>
                
                <label htmlFor="username">Username</label> 
                <Field id="username" type="text" name="username" placeholder="your username" />
                {
                    errors.username && touched.username &&
                    (
                        <ErrorMessage name="username" component= 'div'></ErrorMessage>
                    )
                }



                <label htmlFor="email">Email</label> 
                <Field id="email" type="email" name="email" placeholder="example@gmail.com" />
                {
                    errors.email && touched.email &&
                    (
                        <ErrorMessage name="email" component= 'div'></ErrorMessage>
                    )
                }
                
                
                {/* el role lo dejare asi por ahora solo sera por defecto user*/}

                <label htmlFor="password">Password</label>
                <Field id="password" name="password"  placeholder="password" type="password"
                />  

                {
                    errors.password && touched.password &&
                    (
                        <ErrorMessage name="password" component='div'></ErrorMessage>
                    )
                }
 
                <label htmlFor="confirm">confirm password</label>
                <Field id="confirm" name="confirm"  placeholder=" confirm password" type="password"
                />  

                {
                    errors.confirm && touched.confirm &&
                    (
                        <ErrorMessage name="confirm" component='div'></ErrorMessage>
                    )
                }



            <button type="submit">Register accout</button>  
            {isSubmitting ? (<p>registra tus credenciales...</p>): null}

                </Form>
            )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
