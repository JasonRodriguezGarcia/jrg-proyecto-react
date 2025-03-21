import React, { use, useState } from 'react';
import { useSearchParams } from "react-router-dom";

// búsqueda de 1 parámetro

const BuscadorResultadoPage2 = ()=> {
    //metemos aquí porque si se pone arriba se como como variable global
    const coches = [
        "Citroen",
        "Ferrari",
        "Ferrari Azul",
        "Ferrari Rojo",
        "VW",
        "Opel"
    ]

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q"); // Leer el querystring (lo del "q")
    const [resultado, setResultado] = useState(false)

    const filtroCoches=coches.filter(coche => coche.includes(query))
    console.log("filtrocoches: ", filtroCoches)

    return (
        <>
            <h1>BUSCADORRESULTADOPAGE PEICH</h1>
            <ul>
                {filtroCoches.map((coche) => 
                    <li><h3>{coche}</h3></li>
                )}
            </ul>

        </>
    )
}

export default BuscadorResultadoPage2;