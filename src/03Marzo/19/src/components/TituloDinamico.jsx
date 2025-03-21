import React, { useState, useEffect } from 'react';
// uso de efect
function TituloDinamico() {
  const [title, setTitle] = useState("React App");

  // TO DO Cambiar el titulo del documento cuando haya un cambio al estado 'title' (pista: document.title=)
    useEffect (()=> { // se ejecuta el último, 1º se presenta el componente y luego el useEffect
        document.title = title
    }, [title])

  return (
    <>
      <h1>Cambiar el titulo de la página!</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Introducir un nuevo titulo..."
      />
    </>
  );
}

export default TituloDinamico;






{/* Respuesta: ------
useEffect(() => {
  document.title = title; 
}, [title]); 
*/}