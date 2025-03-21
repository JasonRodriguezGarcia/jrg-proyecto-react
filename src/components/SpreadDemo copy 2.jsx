import React, { useEffect, useState } from "react";


const SpreadDemo = () => {

    const [resultado, setResultado] = useState([1, 2, 3, 4, 0])

    // setResultado(5) // esto es un correcto, se caen en un loop, cambia valor, renderiza, cambia valor, renderiza, ...

    const agregar = () => {
        console.log("Agregar1 ")
        var nuevoArray = resultado
        // resultado.push(6)
        // setResultado(nuevoArray)// esto no funciona
        setResultado(resultado => 
            [...resultado, 6]
            // usando resultado de antes a los que añado el 6

        ) 

    }
    return (
        <>
            <h1>SpreadDemo</h1>
            <button onClick={agregar}>Agregar</button>
            {resultado.map(result => (
                <p>Resultado: {result}</p>
            ))}
        </>
    )
}

export default SpreadDemo;
