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
import Equipo from './components/SpreadEquipo';
import Dangerously from './components/Dangerously';
import SanitizeInputDOMPurify from './components/SanitizeInputDOMPurify';
import CookieExample from './components/CookieExample';
import CookieTheme from './components/CookieTheme';
import CookieThemeSessionStorage from './components/CookieThemeSessionStorage';
import SessionStorage from './components/SessionStorage';
import CuentaBancaria from './components/CuentaBancaria';
import CookieVisitas from './components/CookieVisitas';
import LeafletMap from './components/LeafletMap';


function App() {
  return (

    <>
    <header>      
      <Navbar />
      <CookieVisitas />

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
         {/* <Route path="/buscar" element={<BuscadorResultadoPage />} /> */}

      </Routes>
      
      {/* <SpreadDemo /> */}

      {/* <Equipo /> */}
      {/* <Dangerously /> */}
      {/* <SanitizeInputDOMPurify /> */}
      {/* <CookieExample /> */}
      {/* <CookieTheme /> */}
      {/* <CookieThemeSessionStorage /> */}
      {/* <SessionStorage /> */}
      <CuentaBancaria />
      <LeafletMap />
    </header>
    </>
  );
  
}

export default App;
