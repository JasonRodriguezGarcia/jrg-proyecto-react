import React, { use, useState, useEffect } from 'react';
// los "ganchos" vienen con use...


const Efecto1 = () => {
    const [contador, setContador] = useState(0)
    const [contador2, setContador2] = useState(0)
    

    console.log("rendereizado 1")

    useEffect (()=> { // se ejecuta el último, 1º se presenta el componente y luego el useEffect
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
            console.log("use effecto") // se puede usar para llamar a una base de datos
        }, [contador, contador2]) // si cualquier contador cambia se rederiza todo y al final ejecuta useEffect
//      }, []) // en blanco no ejecuta el useEffect

    console.log("rendereizado 2")

    return (
        <>
            <h1>Hola peña !!</h1>
            <button onClick={() => setContador(prevContador => prevContador + 1)}>Pulsar ...</button>
        </>
    )
    
}

export default Efecto1;