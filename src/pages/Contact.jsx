import React from 'react';
import { Link } from 'react-router-dom';
import home from "../../src/assets/home.jpg" // Esto es lo recomendado ya que cogiendo de aqui es más optimizado
const Contact = ()=> {

    return (
        <>
            <h3>Formulario de Contacto</h3>
            <form>
                <input type="text" autoFocus arial-label="Nombre Completo" placeholder="Nombre Completo" /><br/>
                <input type="email" arial-label="Correo Electrónico" placeholder="Correo Electrónico" /><br/>
                <textarea arial-label="Mensaje" placeholder="Mensaje"></textarea><br />
                <button class="boton">Enviar Mensaje</button>
            </form>
        </>
    )
}

export default Contact;