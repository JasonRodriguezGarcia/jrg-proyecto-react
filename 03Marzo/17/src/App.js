import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
import Coche from './pages/Coche'
import Usuario from './pages/Usuario';
import Usuarios from './pages/Usuarios';

function App() {

  return (
    <>
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
        <Route path="/coche/:id" element={<Coche />}></Route>
        <Route path="/usuarios" element={<Usuarios />}></Route>
        <Route path="/usuario/:id" element={<Usuario />}></Route>

      </Routes>
    </>
  );
  
}

export default App;
