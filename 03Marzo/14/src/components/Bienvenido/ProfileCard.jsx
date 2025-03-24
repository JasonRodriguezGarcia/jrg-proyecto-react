import React, { Fragment } from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ nombre, edad, bio, profileImage }) => {

    return (
        <>
            <div className={styles.contenedor}>
                <div>
                    <h1>{nombre}</h1>
                </div>
                <div>
                    <p>Edad: {edad}</p>
                    <p>Bio: {bio}</p>
                    <img src={profileImage} alt=""></img>
                </div> 
            </div>
            {/* <div className={styles.contenedor}>
                <div>
                    <h1>{nombre}</h1>
                </div>
                <div>
                    <p>Edad: {edad}</p>
                    <p>Bio: {bio}</p>
                    <img src={profileImage} alt=""></img>
                </div> 
            </div> */}
        </>
    )
}

export default ProfileCard;