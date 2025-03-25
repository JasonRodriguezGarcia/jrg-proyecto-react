import { useState, useRef, useEffect } from "react";
import { CuentaBancariaClass } from "../services/CuentaBancariaClass";
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
        cuentaClass.depositar(inputSaldo)
        setSaldo(cuentaClass.saldo)
    }

    const handleRetirar = () => {
        try {
            cuentaClass.retirar(inputSaldo)
            setSaldo(cuentaClass.saldo)
        }
        catch (error) {
            console.log(error.message)
            setMensaje(error.message)
            setTimeout(()=> setMensaje(""), 2000)
        }
    }

    const handleCurrencyToggle = (currency) => {
        setMoneda(currency)
        sessionStorage.setItem("moneda", currency);
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

            <button onClick={() => handleCurrencyToggle("$")}>$</button>
            <button onClick={() => handleCurrencyToggle("€")}>€</button>
            <button onClick={() => handleCurrencyToggle("£")}>£</button>

            {mensaje && <p>{mensaje}</p>}
        </>
    )
}

export default CuentaBancaria;