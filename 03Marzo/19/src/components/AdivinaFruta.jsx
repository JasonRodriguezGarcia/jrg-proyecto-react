import React, { use, useState } from 'react';


const AdivinaFruta = ({ frutaSecreta }  ) => {
    // const frutaSecreta = "manzana";
    const [nombreFruta, setNombrefruta] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [intentos, setIntentos] = useState(0);
    const [botonDis, setBotonDis] = useState(false)

    ////// pending usar este código para fruta secreta aleatoria
    const arrFrutas = [
        "manzana",
        "fresa",
        "plátano",
        "naranja"
    ]    
    let fruta = arrFrutas[Math.floor(Math.random() * arrFrutas.length)]
    ////////////////

    const handleAdivina = (e) => {
        e.preventDefault()
        setIntentos(prevIntentos => prevIntentos + 1)
        if (intentos === 3) {
            setMensaje(mensaje => "Fallaste, no hay más intentos")
            setBotonDis(true)
        }else {
            if (nombreFruta === frutaSecreta) {
                setMensaje(mensaje => "Adivinaste !!")
                setBotonDis(true)
            } else 
            setMensaje(mensaje => "No es correcto. Inténtalo otra vez!")
        }
    }

    return (
        <>
            <h1>🍎 🍌 🍓 🟠 Adivina la fruta</h1>

            <p>¿Cuál es la fruta secreta?</p>
            <form action="" onSubmit={handleAdivina}>
                <input type="text" name="nombreFruta" id="nombreFruta"
                    placeholder='Introduce nombre de fruta'
                    onChange={(e) => setNombrefruta(e.target.value)}
                />
                <button disabled={botonDis}>Adivinar</button>
                {/* <button onClick={handleAdivina} disabled={botonDis}>Adivinar</button> */}
                <button>Resetear</button>
            </form>
            { mensaje && <p>{mensaje}</p>}
            <p>Intentos: {intentos}</p>
        </>
    )
    
}

export default AdivinaFruta;