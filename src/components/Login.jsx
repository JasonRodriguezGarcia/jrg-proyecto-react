import React, { useState } from 'react';
import styles from './Login.module.css'; // Import the CSS module

// ahora con un array de usuarios para comprobar con usuario y su contraseña
const Login = () => {
  // Qué más variables de estado hace falta ...?
//   const [usuario, setUsuario] = useState("")
  const usuarios = [
    {
        nombre: "Pepe",
        password: "ermejó"
    },
    {
        nombre: "Marta",
        password: "tarta"
    },
    {
        nombre: "Jose",
        password: "Jose"
    },
    {
        nombre: "Yoyo",
        password: "Admin"
    },
  ]
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
debugger
    // Comprobar usuario y password
    if (event.target.password.value == usuarios.find((usuario)=>{
        if(usuario.nombre === event.target.usuario.value)
            return (usuario.password)
    })) {

        //     // Se es correcto, cambiar el estado de loggedIn a true
        setLoggedIn (true)
        // setUsuario (event.target.usuario.value)  
        // setErrorMessage ("AUTORIZADO")
    }
    else {
        setErrorMessage ("Usuario no autorizado")
    }

  };

  return (
    <div className={styles.loginForm}>
        {  loggedIn 
            //   Si el estado es loggedIn == true,
            //   mostrar un mensaje diciendo que esta correctamente loggedIn
            ? <h1>LOOGED OK</h1> 
            //  Si el estado NO es loggedIn (false),
            //  mostrar un un formulario  para que introduzca sus datos
            : (
                <form onSubmit={handleSubmit} className='loginForm' action="">
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" name="usuario" id="usuario"
                        onChange={(e) => setUsuario(e.target.value)}
                    />

                    <label htmlFor="contaseña">Contraseña</label>
                    <input type="password" name="password" id="password" 
                        onChange={(e) => setUsuario(e.target.value)}
                    />

                    <button type="submit" className={styles.button}>
                        Login
                    </button>
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                </form>
            )      
        }
    </div>
  );
};

export default Login;