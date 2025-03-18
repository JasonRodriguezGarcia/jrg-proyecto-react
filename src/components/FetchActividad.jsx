import React, { useState } from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"/>

const FetchActividad = ()=>{

    const [usuario, setUsuario] = useState({})
    const [codigoUsuario, setCodigoUsuario] = useState(0)
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // const []

    const handleSubmit= (e) => {
        e.preventDefault()
        setIsLoading(true)

        fetch(`https://jsonplaceholder.typicode.com/users/${codigoUsuario}`)
        .then(response=>{
            if (!response.ok) {
                throw new Error('User not found'); 
            }
            console.log('THEN');
            console.log(response);
            return response.json();
        })
        .then(data =>{
            console.log("second then");
            console.log(data);
            console.log(data.name);
            setUsuario(data)
        })
        .catch(error => {
            console.log(error);
        })
        .finally(()=>{
            console.log('finally');

        })
    }

    const getPosts = () => {
        setTimeout(() => {
            
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${codigoUsuario}`)
            .then(response=>{
                if (!response.ok) {
                    throw new Error('User not found'); 
                }
                console.log('THEN');
                console.log(response);
                return response.json();
            })
            .then(data =>{
                console.log("second then");
                console.log(data);
                // console.log(data.name);
                setPosts(data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(()=>{
                console.log('finally');
                setIsLoading(false)
            })
        }, 2);
        }
        
        return (
            <>
            <h1>Obtener Usuario y Ver publicaciones</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="codigoUsuario">Introduce Cód. Usuario:</label>
                <input type="number" name="codigoUsuario" id="codigoUsuario"
                    onChange={(e)=>setCodigoUsuario(e.target.value)}
                />
                <button>Buscar</button>
            </form>
            <h2>Detalles del Usuario</h2>
            {/* TO DO: Mostrar los detalles del usuario seleccionado */}
            <p>id: {codigoUsuario}</p>
            <p>nombre: {usuario.name}</p>
            {/* <p>edad: {usuario.edad}</p> */}
            {isLoading & <i class="fa-solid fa-spinner"></i>}
            <button onClick={getPosts}>Conseguir Posts</button>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <h3>{post.title}</h3>
                        {post.body}
                    </li>
                    )
                )}
            </ul>
        </>
    )
}

export default FetchActividad