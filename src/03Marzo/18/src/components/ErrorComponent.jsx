import React, { use, useState } from 'react';

const ErrorComponent = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    e.preventDefault()
    try {
        setResult(num1 / num2)
        if (!isFinite(result)) {
            throw new Error('Cannot divide by zero');
        }
        //  else
            // alert(`Resultado: ${result}`)
      // Simulating an error by throwing one
    //   throw new Error('Something went wrong! This is a simulated error.');
    } catch (err) {
      console.log(err);
      console.log('Error message:', err.message);  
      console.log('Error name:', err.name); 
      console.log('Error stack:', err.stack); 
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Simulating an Error in React</h1>

      <form action="">
            <label htmlFor="num1">Primer nº:</label>
            <input type="number" name="num1" id="num1"
                onChange={(e)=> setNum1(e.target.value)} // captando valores en un input
            />

        <label htmlFor="num2">Segundo nº:</label>
        <input type="number" name="num2" id="num2"
            onChange={(e)=> setNum2(e.target.value)} // captando valoers en un input
        />
        <button onClick={handleClick}>Simulate Error</button>
      </form>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      <div>
            {result && <p>Resultado: {result}</p>}
      </div>
    </div>
  );
};

export default ErrorComponent;



/* ACTIVIDAD:

  Implementar un error al calcular 2 numeros. Por ejemplo:
  let result = 10 / 0;

  if (!isFinite(result)) {
    throw new Error('Cannot divide by zero');
  }

  // Conseguir los 2 numeros del usuario, a través del input type=number

*/