import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from "./CookieVisitas.module.css"

const CookieVisitas = () => {
    
    const [visitas, setVisitas] = useState(1) // valor inicial 1
    var cookie = Number(Cookies.get("visitas"))
    
    useEffect(() => {
        if(cookie){
            // setVisitas(prevVisitas => cookie + 1)
            // Cookies.set("visitas", cookie +1, { expires: 7 })
            setVisitas(cookie + 1)
            Cookies.set("visitas", cookie +1, { expires: 7 })
            
        } else {
            Cookies.set("visitas", 1, { expires: 7 })
        }
    }, [])

    // Cookies.remove("theme")

    return (
        <div className={styles.divContainer}>
            <span>Visitas: {visitas}</span>
            <button onClick={()=> {
                    setVisitas(1);
                    Cookies.set("visitas", 1, { expires: 7 })
                    }}
            >
                Reset
            </button>
        </div>
    )
}

export default CookieVisitas;