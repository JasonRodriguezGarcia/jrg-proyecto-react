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

    // Cookies.remove("theme")

    return (
        <div className={styles.divContainer}>
            <p>Visitas: {visitas}</p>

            {/* <svg viewBox="0 0 100 100" style={{border: '2px solid black'}} >
                <rect height="10" width="10" fill="blue"/>
                <circle cx="50" cy="50" r="10" />
                <polygon />
                <line />
                <path d="M54 20 L20 23 Z" fill="blue"/>
            </svg> */}

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
            </svg>         */}
            <svg width="111" height="113" viewBox="0 0 111 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <g id="Frame 1">
            <rect width="111" height="113" fill="white"/> */}
            <g id="lightGroup" className={styles.lightGroup}>
                {/* <path id="Polygon3" d="M55 33L67.9904 54.75H42.0096L55 33Z" fill="#EAC2C2"/> */}
                <path id="Polygon3" d="M55 33L67.9904 54.75H42.0096L55 33Z"/>
            </g>
            <g id="darkGroup" className={styles.darkGroup}>
                <path id="Dark2" d="M55 11L67.9904 32.75H42.0096L55 11Z" fill="#A84E4E"/>
                <path id="Dark1" d="M55 53L67.9904 74.75H42.0096L55 53Z" fill="#A84E4E"/>
            </g>
            {/* </g> */}
            </svg>

        </div>
    )
}

export default CookieVisitas;