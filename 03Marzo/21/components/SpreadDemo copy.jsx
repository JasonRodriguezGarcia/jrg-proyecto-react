import React, { useEffect, useState } from "react";


const SpreadDemo = () => {

    const [resultado, setResultado] = useState(0)

    // setResultado(5) // esto es un correcto, se caen en un loop, cambia valor, renderiza, cambia valor, renderiza, ...

    useEffect(()=>{
        setResultado(prevResultado => prevResultado + 1)
    },[])

    return (
        <>
            <h1>SpreadDemo</h1>
            <button>Agregar</button>
            <p>Resultado: {resultado}</p>
        </>
    )
}

export default SpreadDemo;
