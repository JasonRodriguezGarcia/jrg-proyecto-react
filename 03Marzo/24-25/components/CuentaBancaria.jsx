import { useState, useRef, useEffect } from "react";
import { CuentaBancariaClass } from "../services/CuentaBancariaClass";
import Moneda from "./Moneda";
const cuentaClass = new CuentaBancariaClass(0)


const CuentaBancaria = () => {
    // const cuentaClass = useRef(new CuentaBancariaClass(0));
    // const [saldo, setSaldo] = useState(cuentaClass.current.saldo)
    const [saldo, setSaldo] = useState(cuentaClass.saldo)
    const [inputSaldo, setInputSaldo] = useState(0)
    const [mensaje, setMensaje] = useState("")
    const [moneda, setMoneda] = useState("£")
    
    useEffect(()=> {
        setMoneda(sessionStorage.getItem("moneda")||"$")
    }, [])

    console.log("renderizar")

    const handleDepositar = ()=> {
        cuentaClass.depositar(inputSaldo)   // añadimos saldo a la clase mediante el método depositar
        setSaldo(cuentaClass.saldo)         // actualizamos "saldo" recuperando el saldo de la clase
    }

    const handleRetirar = () => {
        try {
            cuentaClass.retirar(inputSaldo) // restamos saldo a la clase mediante el método retirar
            setSaldo(cuentaClass.saldo)     // actualizamos "saldo" recuperando el saldo de la clase
        }
        catch (error) {                     // manejo de errores. ya implementado dentro de la clase (MIRAR CLASE)
            console.log(error.message)
            setMensaje(error.message)
            setTimeout(()=> setMensaje(""), 2000)
        }
    }

    // const handleCurrencyToggle = (currency) => {
    //     setMoneda(currency)
    //     sessionStorage.setItem("moneda", currency);
    // }

    const handleMonedaCambio = (data) => {
        setMoneda(data)
    }
    return (
        <>
            <h1>Cuenta Bancaria</h1>
            <p>Saldo: {saldo} {moneda}</p>
            <input type="number" name="inputSaldo" value={inputSaldo}
                onChange={(e)=> setInputSaldo(Number(e.target.value))}
                placeholder="Introduce cantidad"
            /> <br />
            <button onClick={handleDepositar}>➕depositar</button>
            <button onClick={handleRetirar}>➖retirar</button>

            {/* <button onClick={() => handleCurrencyToggle("$")}>$</button>
            <button onClick={() => handleCurrencyToggle("€")}>€</button>
            <button onClick={() => handleCurrencyToggle("£")}>£</button> */}

    {/* insertado componente Moneda al que le pasamos un prop que en este caso es una función
    para que nos devuelva la moneda elegida en dentro del componente Moneda */}
            <Moneda handleMonedaCambio={handleMonedaCambio} />  

            {mensaje && <p>{mensaje}</p>}
        </>
    )
}

export default CuentaBancaria;