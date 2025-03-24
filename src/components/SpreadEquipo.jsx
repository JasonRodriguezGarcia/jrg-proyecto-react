import { useState } from "react";

export default function Equipo() {
  const [jugadores, setJugadores] = useState(["Messi", "Ronaldo", "Neymar"]);
  const [nuevoJugador, setNuevoJugador] = useState("");

  // TO DO: Crear una funcion para agregarJugador usando spreading

  const eliminarJugador = (nombre) => {
    setJugadores(jugadores.filter(jugador => jugador !== nombre)); 
  };

  const añadirJugador = (nuevoJugador) => {
    // TODO
    // revisar si el jugador nuevo ya existe

    if (nuevoJugador.length === 0)
        return
    if (jugadores.includes(nuevoJugador))
        return
    setJugadores([...jugadores, nuevoJugador])
  }

  return (
    <div>
      <h2>🏆 Equipo de Fútbol</h2>
      <ul>

        {/* TO DO: 
        Usando jugadores.map, mostrar todos los elementos del array.
        Incluir dentro del bucle, para eliminar un jugador: 
            <button onClick={() => eliminarJugador(jugador)}>❌</button>
        */}
        {jugadores.map((jugador, index) => {
            return (
                <li key={index}>
                    <button onClick={() => eliminarJugador(jugador)}>❌</button>
                    Jugador: {jugador}
                </li>
            )
        })}
       
      </ul>
      <button onClick={() =>añadirJugador(nuevoJugador)}>➕</button>
      <input 
        type="text" 
        placeholder="Nombre del jugador" 
        value={nuevoJugador} 
        onChange={(e) => setNuevoJugador(e.target.value)} 
      />

       {/* 
       TO DO: 
          Agregar un boton para ejecutar la funcion agregarJugador
      */}
      
    </div>
  );
}