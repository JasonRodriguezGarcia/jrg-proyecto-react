import React, { useState, useEffect } from 'react';

// cambiar el backgroundColor con useEffect
function Ejemplo2UseEffect() {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default white

  // Cuando se cambia el valor de bgColor, el efecto secundario
  // es que se cambia el background color del documento entero
  // por ejemplo: document.body.style.backgroundColor = ...
    useEffect(() => {
        document.body.style.backgroundColor = bgColor
    }, [bgColor])

  const cambiaColor = () => {
    setBgColor('#fcfcfc')
  }

  return (
    <div
      style={{
        backgroundColor: bgColor, // Set background color dynamically
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1>El fondo de este componente cambia!</h1>
      <button onClick={()=> setBgColor('#826ae4')}>Cambiar color</button>
      <button onClick={() => setBgColor('#ffffff')}>Restaurar color</button>
    </div>
  );
}

export default Ejemplo2UseEffect;