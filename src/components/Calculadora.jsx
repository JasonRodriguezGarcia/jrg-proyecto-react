import React, { useState } from "react";

const Calculadora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [notaEvaluacion, setNotaEvaluacion] = useState(0);
  const [resultado, setResultado] = useState(null);

  // Funcion para sumar
  const sumar = (a, b) => {
    return a + b;
  };

  // Funcion para restar
  const restar = (a, b) => {
    return a - b;
  };
  // Funcion para multiplicar
  const multiplicar = (a, b) => {
    return a * b;
  };

  // Funcion para dividir
  const dividir = (a, b) => {
    return a / b;
  };

  // Funcion - clasificar numero como 'positivo', 'negativo' o 'zero'


  // Funcion para calcular la media de un Array - avanzado
  const calcularMedia = () => {
    let notas = [1, 10, 20];
    // usar notas.length para conseguir la cantidad de elementos
    let longitudNotas= notas.length
    // Iterar por el array de notas, para calcular la media (average) al final
    let sumaNotas = 0
    for (let index = 0; index < longitudNotas; index++) {
        // const element = notas[index];
        sumaNotas += notas[index];
    }
    console.log(sumaNotas)
    setResultado(`La media es: ${sumaNotas/longitudNotas}`)
  }

// Funcion para clasificar una nota - usar switch
// Si la nota >= 90 => 'A'
// Si la nota >= 80 => 'B'
// Si la nota >= 50 => 'C'
// Si la nota <= 49 => 'Suspenso'

const calcularGraduacion = () => {
  switch (true){
    case notaEvaluacion>=90:
        setResultado("A")
        break
    case notaEvaluacion>=80:
        setResultado("B")
        break
    case notaEvaluacion>=50:
        setResultado("C")
        break
    
    default:
    setResultado("Suspenso!!!")
  }
}


  // Manejo de los clicks de botones
  const agregarNumeros = (operacion) => {
    switch(operacion){
        case "suma":
            setResultado(sumar(num1, num2)); // Usar la funcion para sumar
            break
        case "resta":
            setResultado(restar(num1, num2)); // Usar la funcion para sumar
            break
        case "multiplicacion":
            setResultado(multiplicar(num1, num2)); // Usar la funcion para sumar
            break
        case "division":
            setResultado(dividir(num1, num2)); // Usar la funcion para sumar
            break
                    
    }
  }
//     if (operacion == "suma")
//         setResultado(sumar(num1, num2)); // Usar la funcion para sumar

//   };

  const clasifica = () => {
    if (num1 < 0)
        setResultado("El primer nº es negativo")
    else if (num1 === 0)
        setResultado("El primer número es CERO")
    else setResultado("El primer número es positivo")
  }
  

  return (
    <div>
      <h2>Basic Math Operations</h2>

      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Introducir el primer numero"
        />
      </div>
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Introducir el segundo numero"
        />
      </div>

      <button onClick={()=> agregarNumeros("suma")}>+</button>
      <button onClick={()=> agregarNumeros("resta")}>-</button>
      <button onClick={()=> agregarNumeros("multiplicacion")}>x</button>
      <button onClick={()=> agregarNumeros("division")}>/</button>
      <br />
      <button onClick={clasifica}>Clasifica 1er nº</button>
      <button onClick={calcularMedia}>Calcular media</button>
      <br />
      <div>
        <input
          type="number"
          value={notaEvaluacion}
          onChange={(e) => setNotaEvaluacion(Number(e.target.value))}
          placeholder="Introducir Nota"
        />
      </div>
      <button onClick={calcularGraduacion}>Calcular graduacion</button>

      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  );
};

export default Calculadora;