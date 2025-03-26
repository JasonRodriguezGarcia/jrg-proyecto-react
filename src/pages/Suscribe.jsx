import React from 'react';
import { Link } from 'react-router-dom';

const Suscribe = ()=> {

    return (
        <>
            <h3>Formulario de Suscripción</h3>
            <form>
                <input type="email" autoFocus arial-label="Tu correo electrónico" placeholder="Tu correo electrónico" /><br/>
                <button class="boton">¡Suscríbete ahora y obtén un descuento en 10 segundos!</button>
            </form>
        </>
    )
}

export default Suscribe;