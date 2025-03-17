import React, {useState} from "react";

const Condicional = () =>{

    const x = true;
    const y = false

    const usuario = { nombre: "Pepe", edad: 30 }

    return (
        <>
        <h1>Condicionales en rederizado</h1>
        
             {/* {(x && y)   ? <p>X && Y are true</p>    
                         : <p>X || Y is false</p> }

             si x es true imprime h1 (Sort circuit)
             {x &&<h1>x is true</h1>} // */}

            {/* {usuario?.nombre ? <h1>Bienbenido {usuario.nombre}</h1> : <p>No loggeado</p>} */}

            {usuario?.nombre == "Pepe"? <h1>Bienbenido {usuario.nombre}</h1> : <p>No loggeado</p>}


        
        <button disabled={!x}>Click to ME</button> 
        </>
    )

}

export default Condicional;