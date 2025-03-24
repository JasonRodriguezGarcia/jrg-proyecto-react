import './App.css';
import {Route, Routes } from "react-router-dom";
// import AdivinaFruta from './components/AdivinaFruta';
// import Efecto1 from './components/Efecto1';
// import TituloDinamico from './components/TituloDinamico';
import MovingObjectGame from './components/MovingObjectGame';

function App() {
  return (

    <>

      <MovingObjectGame />
      {/* <Efecto1 />
      <TituloDinamico /> */}

      {/* <AdivinaFruta frutaSecreta ="manzana"/> */}
      {/* <AdivinaFruta /> */}

      {/* <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route> */}
        {/* ruta dinámica añadiendo un parámetro
        /coches/100
        /coches/2
        /coches/ford
        */}
        {/* <Route path="/coche/:id" element={<Coche />}></Route>
        <Route path="/usuarios" element={<Usuarios />}></Route>
        <Route path="/usuario/:id" element={<Usuario />}></Route>
      </Routes> */}
    </>
  );
  
}

export default App;
