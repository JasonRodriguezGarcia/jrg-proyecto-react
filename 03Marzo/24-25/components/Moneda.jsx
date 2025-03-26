import { useState, useRef, useEffect } from "react";

// recivimos el prop handleMonedaCambio
const Moneda = ({ handleMonedaCambio }) => {

    // Función que al recibir el cambio en el parámetro de su llamada en button
    // llama al prop que cambia el código oportuno al componente PADRE
    // este cambio se hace automáticamente
    const toggleCurrency = (moneda) => {
        handleMonedaCambio (moneda)
    }
    return (
        <>
            <button onClick={() => toggleCurrency("$")}>$</button>
            <button onClick={() => toggleCurrency("€")}>€</button>
            <button onClick={() => toggleCurrency("£")}>£</button>
        </>
    )
}

export default Moneda;