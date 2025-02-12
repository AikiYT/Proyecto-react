import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/home/auth/404/NotFoundPage';
import LoginPage from './pages/home/auth/LoginPage';
import DashBoardPage from './pages/home/auth/dashboard/DashBoard';



function AppRotingFinal() {

// hay que cambiarle el valor con sesision storage pronto aun no
let loggedIn = true;

  return (
  <Router>
  <Routes>
  <Route
        path="/"
        element={ // en esta ruta hice una logica si esta logeado lo manda al dashboard sino a que se logue
          loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        }

  />
  {/* login route */}  
  <Route  path='/login' element={<LoginPage />} />
  {/*DASHBOARD ROUTE */}
  <Route
        path="/dashboard"
        element={
          loggedIn ? <DashBoardPage /> : <Navigate to="/login" />
        }
      />
  <Route element={<NotFoundPage />} />



  </Routes>





  </Router>
      
    
  
  );
}

export default AppRotingFinal;
