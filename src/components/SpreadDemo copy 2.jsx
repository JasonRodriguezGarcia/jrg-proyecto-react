import React, { useEffect, useState } from "react";


const SpreadDemo = () => {

    const [resultado, setResultado] = useState([1, 2, 3, 4, 0])
    const [mensaje, setMensaje] = useState("")

    // setResultado(5) // esto es un correcto, se caen en un loop, cambia valor, renderiza, cambia valor, renderiza, ...

    const agregar = () => {
        console.log("Agregar1 ")
        var nuevoArray = resultado
        // resultado.push(6)
        // setResultado(nuevoArray)// esto no funciona
      // Actualizamos el estado con el nuevo número (6)
        setResultado((resultadoAnterior) => {
            const nuevoArray = [...resultadoAnterior, 6];
            const longitud = nuevoArray.length;

            // Condición para actualizar el mensaje
            if (longitud > 6) {
                setMensaje("Más de 6");
            } else {
                setMensaje(""); // Limpiar el mensaje si no se supera el límite
            }
            return nuevoArray;
        });
    }

    return (
        <>
            <h1>SpreadDemo</h1>
            <button onClick={agregar}>Agregar</button>
            {resultado.map(result => (
                <div>
                    <p>Resultado: {result}</p>
                    {mensaje && <p>Mensaje: {mensaje}</p>}
                </div>
            ))}
        </>
    )
}

export default SpreadDemo;
