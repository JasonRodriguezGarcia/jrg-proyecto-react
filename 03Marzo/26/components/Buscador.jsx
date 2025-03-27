import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

{/*

 Buscador con URL - Incluir en el App.js:
 <Route path="/buscar" element={<BuscadorResultadoPage />} />

  encodeURIComponent = caracteres especiales &, =, ?, #, /, ... se cambia a una representacion de URL. Por ejemplo:
  & → %26
  ? → %3F
  = → %3D
  # → %23
  / → %2F
*/}

function Buscador() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const navigate = useNavigate();

    const handleBuscar = () => {
        // codifica query a queryString
        // navega a la ruta /buscar con una cadena queryString
        navigate(`/buscar?titulo=${encodeURIComponent(titulo)}&`+
                `autor=${encodeURIComponent(autor)}`); 
    };

  return (
    <div>
        <h1>Buscar Libros</h1>
        <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Escribir título..."
        />      
        <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            placeholder="Escribir autor..."
        />
        <button onClick={handleBuscar}>Buscar</button>
    </div>
  );
}

export default Buscador;