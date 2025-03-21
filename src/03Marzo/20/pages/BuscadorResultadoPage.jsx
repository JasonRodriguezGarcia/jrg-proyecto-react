import React, { use, useState } from 'react';
import { useSearchParams } from "react-router-dom";


const BuscadorResultadoPage = ()=> {
    //metemos aquí porque si se pone arriba se como como variable global
    const libros = [
        { titulo: "El Quijote de La Mancha", autor: "Miguel de Cervantes Saavedra"},
        { titulo: "Introducción a la programación", autor: "John Smith"},
        { titulo: "Patrones de diseño", autor: "Erich Gamma"},
        { titulo: "JavaScript para principiantes", autor: "Jane Doe"},
    ]

    const [searchParams] = useSearchParams();
    const queryTitulo = searchParams.get("titulo"); // Leer el querystring (lo del "titulo")
    const queryAutor = searchParams.get("autor"); // Leer el querystring (lo del "titulo")
    // console.log("Query: ", queryTitulo, queryAutor)
    debugger
    // const [resultado, setResultado] = useState(false)
    // const [errorMessage, setErrorMessage] = useState("")

    const filtroLibros = libros.filter(libro => libro.titulo.includes(queryTitulo))
    console.log("filtro libros: ", filtroLibros)

    

    return (
        <>
            <h1>BUSCADORRESULTADOPAGE PEICH</h1>
            <ul>
                {filtroLibros.length === 0? <p>Sin resultados</p>:
                filtroLibros.map((libro, index) => 
                    <>
                        <li key={index}>Libro: <h3>{libro.titulo}</h3></li>
                        <li key={index}>Autor: <h3>{libro.autor}</h3></li>
                    </>
                )}

            </ul>
        </>
    )
}

export default BuscadorResultadoPage;