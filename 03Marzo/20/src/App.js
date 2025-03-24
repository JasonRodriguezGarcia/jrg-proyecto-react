import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './utils/ProtectedRoute';
import ProtectedRouteAdmin from './utils/ProtectedRouteAdmin';
import Admin from './pages/Admin';
import BuscadorResultadoPage from './pages/BuscadorResultadoPage';
import Ejemplo1UseEffect from './components/Ejemplo1UseEffect';
import Ejemplo2UseEffect from './components/Ejemplo2UseEffect';

function App() {
  return (

    <>

    {/* <Ejemplo1UseEffect /> */}
    {/* <Ejemplo2UseEffect /> */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* ruta dinámica añadiendo un parámetro
        /coches/100
        /coches/2
        /coches/ford
        */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} isAuthenticated={false}/>}
        />
        <Route
          path="/admin"
          element={<ProtectedRouteAdmin element={<Admin />} isAuthenticated={false}/>}
        />
         <Route path="/buscar" element={<BuscadorResultadoPage />} />

      </Routes>
    </>
  );
  
}

export default App;
