import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/home/auth/404/NotFoundPage';
import AboutPage from './pages/home/about-fags/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskListComponent from './components/container/task.list';
import TaskPage from './pages/home/tasks/TaskPage';
import TaskDetailPage from './pages/home/tasks/TaskDetailPage';

function AppRoutingOne() {
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
        </aside>

        <main>
        <Routes> {/* y dendro se pondre routes para ya empezar a declarar*/}
        <Route path="/" element={<HomePage />} />       {/* aca pongo la primera ruta donde ira si ejecuto este componente primero pongo route path / ese simbolo significa que lo sacao de la raiz del proyecto y pongo elemet y ahi si llamo el componente que quiero*/}
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<AboutPage />} />  {/* esta es una ruta compartida si yo pongo about o faq dentro del enlace de arriba del localhost ejemplo pongo localhost300/ about de igual forma me llevara a aboutpage y si pongo faq igual me llevaria*/ }
        <Route path='/profile' element={<ProfilePage />} />
        <Route path= '/Tasklist' element={<TaskPage />} />
        <Route path='/Tasklist/:id' element={<TaskDetailPage />} /> {/* en una proxima seccion veremos esto*/}
        {/* 404 page not found xd*/}
        <Route path="*" element={<NotFoundPage />} />  {/* el orden importa sino encuentra a homepage entrara a este componente*/}
      </Routes>

        </main>
      </div>
      
      
      
      
    
    </Router>
  );
}

export default AppRoutingOne;
