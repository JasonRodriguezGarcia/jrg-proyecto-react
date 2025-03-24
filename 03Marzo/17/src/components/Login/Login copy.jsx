import React, { useState } from 'react';
import styles from './Login.module.css'; // Import the CSS module

const Login = () => {
  // Qué más variables de estado hace falta ...?
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
debugger
    // Comprobar usuario y password
    if (event.target.password.value == "Admin") {

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
                    <input type="password" name="password" id="password" />

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