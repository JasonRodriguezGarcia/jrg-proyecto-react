import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../src/assets/logo192.png" // Esto es lo recomendado ya que cogiendo de aqui es más optimizado
const Contact = ()=> {

    return (
        <>
            <h1>Contact peich</h1>

            <img src={logo} alt="logo" />
            {/* <img src={logo2} alt="logo2" /> */}

            {/*  como si fuera un <a href="http:// ..." */}
            <Link to="/about">- Ir p'al abaut ... -</Link><br />

            {/* este referesca toda la pantalla, el Link no */}
            <a href="/about">ir al about</a>
        </>
    )
}

export default Contact;