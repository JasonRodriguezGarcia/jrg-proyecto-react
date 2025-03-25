import { useState } from "react";
import { CuentaBancariaClass } from "../services/CuentaBancariaClass";

const CuentaBancaria = () => {

    const [cuenta, setCuenta] = useState(new CuentaBancariaClass(0))
    const [inputSaldo, setInputSaldo] = useState(0)
    const [mensaje, setMensaje] = useState("")
    debugger

    const handleDepositar = ()=> {
        setCuenta(cuenta.depositar(inputSaldo))
    }

    const handleRetirar = () => {
        try {
            setCuenta(cuenta.retirar(inputSaldo))
        }
        catch (error) {
            console.log(error.message)
            setMensaje(error.message)
            setTimeout(()=> setMensaje(""), 2000)
        }
    }

    return (
        <>
            <h1>Cuenta Bancaria</h1>
            <p>Saldo: {cuenta.getSaldo()}</p>
            <input type="number" name="inputSaldo" value={inputSaldo}
                onChange={(e)=> setInputSaldo(Number(e.target.value))}
                placeholder="Introduce cantidad"
            /> <br />
            <button onClick={handleDepositar}>➕depositar</button>
            <button onClick={handleRetirar}>➖retirar</button>
            {mensaje && <p>{mensaje}</p>}
        </>
    )
}

export default CuentaBancaria;