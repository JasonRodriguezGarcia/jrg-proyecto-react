import React, {useState} from "react";

const Input = () => {

    // definimos usa variable mensaje2 con getter y con su setter, su valor 0 por defecto
    const [mensaje2, setMensaje2] = useState("") 

    const handleChange = (event)=> {
        console.log(event.target.value)
        setMensaje2 (event.target.value)
    }

    return (
        <>
            ----------------
            <input type="text" onChange={handleChange}/>
            <div>{mensaje2}</div>
            ----------------
        </>
    )
};

export default Input;