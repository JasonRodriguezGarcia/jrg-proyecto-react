import { useState, useRef, useEffect } from "react";

const Moneda = ({ handleMonedaCambio }) => {

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