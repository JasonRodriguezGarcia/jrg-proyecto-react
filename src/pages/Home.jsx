import React from 'react';
import { Link } from 'react-router-dom';
import home from "../../src/assets/home.jpg"

const Home = ()=> {

    return (
        <>
            <h3>Bienvenido a Nuestra Página</h3>
            <img src={home} alt="Imagen de ejemplo" />
            <p>Esta es una página de ejemplo donde ofrecemos información sobre nuestros productos y servicios. Puedes contactarnos o suscribirte para recibir descuentos exclusivos.</p>
        </>
    )
}

export default Home;