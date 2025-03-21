import React, { use, useState, useEffect } from 'react';


const u = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com"
}

// prueba de useEffect al hacer un fetch

const Ejemplo1UseEffect = () => {
    
    const [usuario, setUsuario] = useState(u)
    
    // conseguir datos después de renderizar
    // useEffect(() => {
        //fetch por defecto es GET
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setUsuario(json)
        }
        )
    // }, [])  // para que se renderize la primera vez, se queda en []

    // si comentamos el useEffect y dejamos el fetch, como el componente se renderiza cada milisegundo
    // por que al renderizar ejecuta el fetch que actualiza el estado y el componente se vuelve
    // a renderizar otra vez ejecuta el fetch que actualiza el estado y el componente se vuelte
    // a renderizar otra vez ejecuta el ...
    // no hará más que aparecer en consola repitiéndose INFINITAMENTE, por eso lo del useEffect

    return (
        <>

            <h1>Usuario</h1>    
            <p>id: {usuario.id}</p>
            <>Nombre: {usuario.name}</>
            <p>email: {usuario.email}</p>

        </>
    )
}

export default Ejemplo1UseEffect;