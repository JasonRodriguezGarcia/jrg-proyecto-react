import { useState } from "react";
import { CuentaBancariaClass } from "../services/CuentaBancariaClass";

const CuentaBancaria = () => {

    const [saldo, setSaldo] = useState(new CuentaBancariaClass(0))
    const [inputSaldo, setInputSaldo] = useState(0)
    const handleDepositar = ()=> {
        setSaldo(saldo.depositar())
    }

    const handleRetirar = () => {

    }

    return (
        <>
            <h1>Cuenta Bancaria</h1>
            <p>Saldo: {saldo}</p>
            <input type="text" name="saldo" value={saldo}
                onChange={(e)=> setSaldo(e.target.value)}
                placeholder="Introduce cantidad"
            /> <br />
            <button onClick={handleDepositar}>➕depositar</button>
            <button onClick={handleRetirar}>➖retirar</button>
            </>
    )
}

export default CuentaBancaria;