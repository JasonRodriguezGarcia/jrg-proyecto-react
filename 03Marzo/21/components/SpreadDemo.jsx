import React, { useEffect, useState } from "react";


const SpreadDemo = () => {

    const [resultado, setResultado] = useState([1, 2, 3, 4, 0])
    const [numero, setNumero] = useState(0)

    // setResultado(5) // esto es un correcto, se caen en un loop, cambia valor, renderiza, cambia valor, renderiza, ...

    const agregar = () => {
        console.log("Agregar1 ")
        // var nuevoArray = resultado
        // resultado.push(6)
        // setResultado(nuevoArray)// esto no funciona

        // usando resultado de antes a los que añado el 6
     
        setResultado(resultado => 
            [...resultado, numero]

        ) 
        setNumero(0)

    }
    return (
        <>
            <h1>SpreadDemo</h1>
            <label htmlFor="numero"></label>
            <input type="number" id="numero" name={numero}
                onChange={(e)=> setNumero(e.target.value)}
            />
            <button onClick={agregar}>Agregar</button>
            {resultado}
            {resultado.map((result, index) => (
                <p key={index}>Resultado: {result}</p>
            ))}
        </>
    )
}

export default SpreadDemo;
