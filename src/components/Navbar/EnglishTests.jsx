import React, { useState, useEffect } from 'react';
import styles from "./EnglishTests.module.css";

// Actividad: Completar los pasos para guardar el correo y direccion en cada paso,
// a través del Session Storage

// Formulario de múltiples pasos

function EnglishTests() {
  const [step, setStep] = useState(1);
  // usar para guardar nombre de un input
  // nota al final del ejercicio
  const [buttonsDisabled, setButtonDisabled] = useState([ true, true, true ])
  const arrayPosibleReplies= [
    "friendly",
    "talkative",
    "generous",
    "kind",
    "lazy",
    "funny",
    "clever",
    "shy",
  ]
  const exercicesText = [ "Click the adjetive that match to the definition" ]

  const arrayQuestions1 = [
    {textQuestion: "A person who is quick at learning and understang this is ...", textAnswer: "clever", keyAnswer: 6},
    {textQuestion: "A person who is open and warm is ...", textAnswer: "kind", keyAnswer: 3},
    {textQuestion: "A person who makes people laugh is ...", textAnswer: "funny", keyAnswer: 5},
    {textQuestion: "A person who likes giving people thing is ...", textAnswer: "generous", keyAnswer: 2},
    {textQuestion: "A person who is friendly and good to other people is ...", textAnswer: "friendly", keyAnswer: 0},
    {textQuestion: "A person who doesn't want to work is ...", textAnswer: "lazy", keyAnswer: 4},
    {textQuestion: "A person who can't talk easily to people he/she doesn't know is ...", textAnswer: "shy", keyAnswer: 7},
    {textQuestion: "A person who talks a lot is ...", textAnswer: "talkative", keyAnswer: 1},
  ]
  // sessionStorage.setItem('nombre', nombre);

  const handleNextStep = () => {
    // Guardar los datos del paso actual en sessionStorage antes de pasar al siguiente paso
    // TO DO - que datos hace falta guardar cada vez que pasas al siguiente step
    setStep(step + 1);
  };

  const handleNextStep2 = () => {
    // Guardar los datos del paso actual en sessionStorage antes de pasar al siguiente paso
    // TO DO - que datos hace falta guardar cada vez que pasas al siguiente step
    setStep(step + 1);
  };

  const handleNextStep3 = () => {
    // Guardar los datos del paso actual en sessionStorage antes de pasar al siguiente paso
    // TO DO - que datos hace falta guardar cada vez que pasas al siguiente step
    setStep(step + 1);
  };

  const handleBackStep = () => {
    // TO DO - volver al step de antes
    setStep(step - 1);
  };

  const handleReboot = () => {
    setStep(1)
  }

// Funcion para clasificar una nota - usar switch
// Si la nota >= 90 => 'A'
// Si la nota >= 80 => 'B'
// Si la nota >= 50 => 'C'
// Si la nota <= 49 => 'Suspenso'

  // const calcularGraduacion = () => {
  //   switch (true){
  //     case notaEvaluacion>=90:
  //         setResultado("A")
  //         break
  //     case notaEvaluacion>=80:
  //         setResultado("B")
  //         break
  //     case notaEvaluacion>=50:
  //         setResultado("C")
  //         break
      
  //     default:
  //     setResultado("Suspenso!!!")
  //   }
  // }

  const checkAnswer = (answerCheck) => {
    console.log(answerCheck)
    console.log(arrayQuestions1[step-1])
    if(arrayQuestions1[step-1].keyAnswer === answerCheck) {
      console.log(" es Correcto") 
        // hablar(`{arrayQuestions1[step-1].textAnswer} is correct`)
        setButtonDisabled(prevButtonDisabled => {
          const buttonsDisabledTMP = [...buttonsDisabled]
          buttonsDisabledTMP[step-1]=false
          return buttonsDisabledTMP
        })
        hablar(`${arrayQuestions1[step-1].textAnswer}, is correct!`)

    }
    else {
      console.log(" es Incorrecto")
    }
  }

  const hablar = (texto) => {

    // const texto = "Hola, buenos dias!";
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = "en-EN";
    speech.onend = () => {
        console.log("Speech ended");
      };
    // Trigger the speech synthesis
    window.speechSynthesis.speak(speech);
}

  return (
    <div className="App">
      <h1>English Tests</h1>
      <h3>{exercicesText[0]}</h3>
      
      {step === 1 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          <p>
            { 
              arrayPosibleReplies.map ((reply, index)=> 
                <span key={index} onClick={() => checkAnswer(index)}> {reply} </span>
              )
            }
          </p>
          <button onClick={handleNextStep} disabled={buttonsDisabled[step-1]}>Siguiente</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          <p>
            { 
              arrayPosibleReplies.map ((reply, index)=> 
                <span key={index} onClick={() => checkAnswer(index)}> {reply} </span>
              )
            }
          </p>
          <button onClick={handleNextStep2} disabled={buttonsDisabled[step-1]}>Siguiente</button>
        </div>
      )}

      {/* TO DO: Agregar un step 3 para captar la direccion del usuario */}
      {step === 3 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          <p>
            { 
              arrayPosibleReplies.map ((reply, index)=> 
                <span key={index} onClick={() => checkAnswer(index)}> {reply} </span>
              )
            }
          </p>
          <button onClick={handleNextStep3} disabled={buttonsDisabled[step-1]}>Siguiente</button>

        </div>
      )}
    
      {step === 4 && (
        <div>
          <h2>¡Gracias por completar el formulario!</h2>
          <button onClick={handleReboot}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}

export default EnglishTests;