import React, {useState} from "react";

const Elegible = () => {
        // definimos usa variable mensaje3 con getter y con su setter, su valor 0 por defecto
        const [mensaje3, setMensaje3] = useState("PENDIENTE VERIFICAR...")
        const [edad, setEdad] = useState(0)

    const handleChange = (event)=> {
        console.log(event.target.value)

        setEdad (event.target.value)
    }

    const handleClick = () => {
        if (edad <18) {
            setMensaje3 ("NO AUTORIZADO!!")
        } else {
            setMensaje3 ("AUTORIZADO. puede pasar")

        }
    }

    return (
        <>
            <label htmlFor="edad">EDAD:</label>
            <input type="number" name="edad" onChange={handleChange} placeholder="introducir edad"/>
            <button onClick={handleClick}>VERIFICAR</button>
            <div>{mensaje3}</div>
        </>

    )

}

export default Elegible;