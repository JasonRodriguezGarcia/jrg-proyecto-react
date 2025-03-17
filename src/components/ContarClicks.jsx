import React, {useState} from "react";

const ContarClicks = () => {

    // definimos usa variable contar con getter y con su setter, su valor 0 por defecto
    const [contar, setContar] = useState(0) 
    console.log("Renderizar") // esto se hace 2 veces, en producción solo 1
    const [mensaje, setMensaje] = useState("")

    const handleClick = () => {
        console.log("clickado Contar!!")
        // setContar(contar + 1) // sistema viejo
        // para incrementar stado, cambiamos el estado previo de Contar
        // setContar (prevContar => prevContar + 1)
        // if (contar === 5) 
        //     setMensaje("Has llegado a 5!!")
        // else
        //     setMensaje("")
        setContar (prevContar => {
            const nuevoContar = prevContar +1
            if (nuevoContar === 5) 
                setMensaje("Has llegado a 5!!")
            else
                setMensaje("")
            return nuevoContar
        })
        
    }
    const handleClickDec = () => {
        console.log("clickado Decrementar!!")
        // setContar(contar + 1) // sistema viejo
        // para incrementar stado, cambiamos el estado previo de Contar
        setContar (prevContar => prevContar - 1) 
    }
    const handleClickReset = () => {
        console.log("clickado Resetear!!")
        // setContar(contar + 1) // sistema viejo
        // para incrementar stado, cambiamos el estado previo de Contar
        setContar (0) 
    }

    return (
        <>
            <div>
                Resultado: {contar}
            </div>
            <div>
                {mensaje}
            </div>
            <button onClick={handleClick}>Incrementar</button>
            <button onClick={handleClickDec}>Decrementar</button>
            <button onClick={handleClickReset}>Resetear</button>
        </>
    )
};

export default ContarClicks;