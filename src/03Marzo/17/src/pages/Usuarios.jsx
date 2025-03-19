import React from 'react';
// TO DO: importar Params
import { Link } from "react-router-dom";


// Lista de usuarios simulada
const usuarios = [
  { id: 1, nombre: 'Juan Pérez', edad: 28 },
  { id: 2, nombre: 'Ana García', edad: 34 },
  { id: 3, nombre: 'Carlos López', edad: 22 },
  { id: 4, nombre: 'Perico el de los Palotes', edad: 30 },
];

const Usuarios = () => {

    return (
        <>
            <ul>
                {usuarios.map((usuario, key) => {
                    return (
                        <li key={key} onClick={()=>console.log("test")}>
                            Nombre: <Link to={`/usuario/${usuario.id}`}>{usuario.nombre}</Link>
                        </li>
                    )
                })}
            </ul>

            <button>Listar Usuario</button>
        </>

    )
}

export default Usuarios;