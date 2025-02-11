import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/home/auth/404/NotFoundPage';
import AboutPage from './pages/home/about-fags/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskListComponent from './components/container/task.list';
import TaskPage from './pages/home/tasks/TaskPage';
import TaskDetailPage from './pages/home/tasks/TaskDetailPage';
import LoginPage from './pages/home/auth/LoginPage';
import { useEffect } from 'react';
import StateProps from './pages/home/StateProps';


function AppRoutingOne() {


  let logged = false; // importante si queremos pasarle una variable a un useEffect si esta const nunca podra cambiar por lo que dara error asi que mejor hacer un let para inicializar la variable
  // sessionstorage solo gaurdara las cosas en el navegador hasta que yo termine de probar nose guardara nada cuando yo me salga del programa si fuera localstorage si lo haria esto es para prueba el session

  let tasklist = [
    {
      id: 1,
      name: 'task 1',
      description: 'my firts Task',
    },
    {
      id: 2,
      name: 'task 2',
      description: 'my second Task',
    }
  ]



    useEffect(() => {
      
      logged = localStorage.getItem('credentials'); 
        console.log('user logged')
      
    }, []);

  return (
    <Router> {/* para empezar a poner las rutas se pone router*/}
      <div>
      
      {/* los links deben estar dentro de aside y en el link to mandarlos a la parte que quiero*/}
        <aside>
        <Link to='/'>||Home|</Link>
      <Link to='/about'>||ABOUT|</Link>  {/* dentro de router declara unos links que basicamente son como los hipervinculos pongo link to la raiz y pongo el texto que tendran estos links*/}
      <Link to='/faqs'>||FAQS|</Link>
      <Link to='/una404'>Not Existing route</Link> {/* y esta ruta que no existe ya que no existe lleva a la pagina que cree de si no encutra la 404 */}
        <Link to='/profile'>Profile Page</Link>
        <Link to='/Tasklist'>Tasklist</Link>
        <Link to='/login'>loginpage</Link>
        <Link to='/task/1'>task1</Link>
        <Link to='/task/2'>task2</Link>
        </aside>

        <main>
        <Routes> {/* y dendro se pondre routes para ya empezar a declarar*/}
        <Route path="/" element={<HomePage />} />       {/* aca pongo la primera ruta donde ira si ejecuto este componente primero pongo route path / ese simbolo significa que lo sacao de la raiz del proyecto y pongo elemet y ahi si llamo el componente que quiero*/}
        <Route
              path="/login"
              element={
                logged ? (
                  (() => {
                    alert('You are logged in. Redirecting to home...');
                    return <Navigate to="/" />;
                  })()
                ) : (  // aca hay 2 funciones si esta loged lo mandara al home sino lo mandare a que se loge
                  <LoginPage />
                )
              }
            />

        
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<AboutPage />} />  {/* esta es una ruta compartida si yo pongo about o faq dentro del enlace de arriba del localhost ejemplo pongo localhost300/ about de igual forma me llevara a aboutpage y si pongo faq igual me llevaria*/ }
        <Route path='/online-state' element={<StateProps />} />
        <Route
              path="/profile"
              element={
                logged ? (
                  <ProfilePage /> // aca pregunta si esta logiado sino mandata ese alert y lo mandara al LOGINPAGE
                ) : (
                  (() => {
                    // aca va un alert si quiero
                    return <Navigate to="/login" />;
                  })()
                )
              }
            />
        
        
        
        <Route path= '/Tasklist' element={<TaskPage />} />
        <Route
  path="/task/:id"
  element={({ params }) => ( // aca digo que me renderize params params es un elemento que me ayudara a poder llamar cualquier prop o propiedad que quiera usar del programa en este caso task
    <TaskDetailPage task={tasklist[params.id - 1]} /> // y aca digo renderiza taskdetail pero con esta tarea y le paso el id en -1 para que empieze desde el 0
  )}
/>        
{/* 404 page not found xd*/}
        <Route path="*" element={<NotFoundPage />} />  {/* el orden importa sino encuentra a homepage entrara a este componente*/}
      </Routes>

        </main>
      </div>
      
      
      
      
    
    </Router>
  );
}

export default AppRoutingOne;
