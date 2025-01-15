/**
 * ejemplo de componente de tipo clase que dispone
 * de los metodos de ciclo de vida /14-1-2025
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Ejemplo de componente de tipo clase que dispone de los métodos de ciclo de vida
 */
class LifeCycleExample extends Component {
    constructor(props) {
    super(props);
    console.log('cuando se instancia el componente eso es un constructor solo sirven para inicializar variables y componentes')
    
    } 

componentWillMount() {
    // este sucede antes del montaje del componente
}

componentDidMount() {
    // justo al del montaje del componente, antes de renderizarlo
}

componentWillReceiveProps(nextProps) {
    // Si va a recibir nuevas props
}

shouldComponentUpdate(nextProps, nextState) {
    // este debe devolver o un true o un false
    // este controla eso si debe o no actualizarse
    return true;
}

componentWillUpdate(nextProps, nextState) {
    // justo antes de actualizarse --nose usa mucho hoy en dia
}

componentDidUpdate(prevProps, prevState) {
    // justo despues de actualizarse
}

componentWillUnmount() {
    // justoa antes de desaparecer

render() {
    return (
      <div>
        {/* Contenido del componente */}
      </div>
    );
  }
}



export default LifeCycleExample;
