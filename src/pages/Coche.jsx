import React from 'react';
import { useParams } from 'react-router-dom';

const Coche = ()=> {

    const {id} = useParams()

    return (
        <>
            <h1>Coche peich</h1>
            <h2>Parámetro: {id}</h2>
        </>
    )
}

export default Coche;