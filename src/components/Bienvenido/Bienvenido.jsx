import React, { Fragment } from "react";
import styles from "./Bienvenido.module.css";

const Bienvenido = ({nombre, edad}) => {

    // const nombre = "Tio camuñas";
    const handleClick = ()=> {
        console.log("C @ B R O N A C H O!!!...")
    }

    const numeros = [1, 2, 4, 5, 8, 10]

    return (
        <Fragment>
            <h1 className={styles.titulo}>😂😂Bienvenido {nombre}... tienes {edad} años !!!🤣🤣</h1>
            <p className={styles.titulo}>ME VOY A CASA</p>

            <h1>{numeros.map(numero => numero + " ")}</h1>
            <h1>{numeros.map((numero, index) => (
                <p key={index}>{numero}</p>
            ))}
            </h1>

            <button onClick={()=> console.log("hola trónnnn...")}>Pulsar!!</button>
            <button onClick={handleClick}>Pulsar2!!</button>
        </Fragment>
    )
}


export default Bienvenido;
