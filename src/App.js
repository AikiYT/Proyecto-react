import logo from './logo.svg';
import './App.css';
import Greeting from './pure/greeting';
import Funciongreeting from './pure/funciongreeting';
import TaskListComponent from './components/container/task.list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Ejemplo3 from './hooks/Ejemplo3';
import GreetingStyled from './pure/greetingStyled';
import  Father from './components/container/father';
import OptionalRender from './pure/optionalRender';

function App() {
  return (
    <div className="App">
     {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/* componente propio que traje de greeting.jsx y arriba lo impoorte par que no de error */}
        {/*<Greeting name="martin"></Greeting> {/* dentro del componente puedo poner una variable en este caso name que alla en el jsx se la puse mi constructor dentro del componente greetings y por eso llama a martin primero debo ponersela alla en jsx en el render*/}
       {/*<Funciongreeting name="Iverson"></Funciongreeting>*/}
       
       {/* ejemplo de compoente aqui traje la lista de tareas*/}
       {/*<TaskListComponent></TaskListComponent>*/}

       {/* ejemplo de uso de hooks*/}
      {/*<Ejemplo1></Ejemplo1>*/}

       {/* ejemplo2 de uso de hooks*/}
       {/*<Ejemplo2></Ejemplo2>*/}
      
      
    

      {/*<Ejemplo3></Ejemplo3>*/}
       {/*<MiComponenteConContexto></MiComponenteConContexto>*/}


       {/*<Ejemplo4></Ejemplo4>*/}
       {/*<Ejemplo4 nombre="martin">
        <h3>
          contenido de props.children
        </h3>
       </Ejemplo4>*/}


       {/*<GreetingStyled name= "iverson"></GreetingStyled>*/}



        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      {/*</header>*/}



    {/*<Father></Father>*/}




  {/* Ejemplos de renderizado condicional video 12*/}
  <OptionalRender></OptionalRender>


    </div>
  );
}

export default App;
