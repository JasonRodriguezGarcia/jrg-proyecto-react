import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from "./CookieVisitas.module.css"

const CookieVisitas = () => {
    const [visitas, setVisitas] = useState(0)

    var cookie = Number(Cookies.get("visitas"))

    useEffect(() => {
        if(cookie){
            setVisitas(prevVisitas => cookie + 1)
            Cookies.set("visitas", cookie +1, { expires: 7 })

        } else {
            Cookies.set("visitas", 1, { expires: 7 })
        }
    }, [])

    return (
        <div className={styles.divContainer}>
            <p>Visitas: {visitas}</p>

        </div>
    )
}

export default CookieVisitas;