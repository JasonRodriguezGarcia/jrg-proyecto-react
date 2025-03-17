import React from 'react';
import { Link } from 'react-router-dom';

const Home = ()=> {

    return (
        <>
            <h1>Jom peich</h1>

            {/*  como si fuera un <a href="http:// ..." */}
            <Link to="/about">- Ir p'al abaut ... -</Link><br />

            {/* este referesca toda la pantalla, el Link no */}
            <a href="/about">ir al about</a>
        </>
    )
}

export default Home;