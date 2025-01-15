// jsx aqui en estos crearemos los componentes

//mi primer componente en este caso de tipo clase
// escribi rcc y m esaldran cosas para autocompletar en este caso use rccp que me dio esta estructura


import React, { Component } from 'react';
import PropTypes from 'prop-types';

// como puedes ver es una combinacion de js con html esto es lo que es un arhcivo jsx esto nos permitara combinar cosas del js con html como puedes ver hay un div y todo aqui

class Greeting extends Component { // estos componentes de tipo clase tienen k tener constructores como orientada a objetos

// dentro del parantesis eso es un promp osea ahi podemos pasarle algo algun html o etc
constructor(props){
    super(props);
    this.state = {  // si queremos que ese valor cambie de state osea de estado ahi ya usariamo sun set state para cambiar el valor si fuese una funcion fuese otra cosa esto es una clase
     age : 29 
    }

}



    render() {  // acuerdate que solo devuelve un componente un solo return osea por cada commponente podre hacer 1 solo div o elementos solo 1 vez osea solo 1 h1 un div etc no mas de un h1 ni d eun div
        return (  // para usar cosas de js en el html se usan {}
            <div> 
                <h1>
                hola {this.props.name}  
                </h1>
                <h2>
                    tu edad es de: {this.state.age}  
                </h2>
                <div>
                    <button onClick={this.birthday}> 
                        cumplir anos 
                    </button>
                </div> 
            </div>                            // como puedes ver al boton le puedo poner un evento como c# onclick y llame a birthday para que haga eso que hice del +1 a la variable de age
        );// este componente lo mande a App.js para que se muestre y lo llame con un import
    }
// vez aqui uso el setstate 
    birthday = () => {   // aqui cree otra variable birthday le puse setstate(prevstate) osea que vuelva al estado previo y que a la varibale age le sume 1 ahora es la unica forma de incrementar el valor de una variable d eun componente ya existente ahora mira el div para que veas lo que hice
        this.setState((prevState) => (
            {
                
                    age: prevState.age +1
                }
        ))
        
        }
    }


// los proptypes son el contenido que yo le puedo pasar a un componente de orden supeior // tambien es importe aqui especificar de que tipo es cada variable como hare ahora con name
Greeting.propTypes = {
name: PropTypes.string
};
// y asi se hace a name por ejemplo le asigne que tipo de valor poniendo la variable dos puntos proptypes.string si fuese number seria otra cosa etc

export default Greeting;

