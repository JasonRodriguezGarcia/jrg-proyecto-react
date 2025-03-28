import React, { useState, useEffect } from 'react';
import styles from "./EnglishTests.module.css";

// Formulario de múltiples pasos
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
const exercicesText = [ "Exercice 1- Click the adjetive that match to the definition", "Exercice 2- Match the image with descripcion" ]

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

const arrayQuestions2 = [

]

function EnglishTests() {
  const [step, setStep] = useState(1);
  // usar para guardar nombre de un input
  // nota al final del ejercicio
  const [buttonsDisabled, setButtonsDisabled] = useState(true) // añadir más si hay mas botones
  // sessionStorage.setItem('nombre', nombre);
    const [success, setSuccess] = useState(0)
    const [fail, setFail] = useState(0)
    const [alreadySuccess, setAlreadySuccess] = useState(false)
    const [alreadyFailed, setAlreadyFailed] = useState(false)
    const [exercicesTitles, setExercicesTitles] = useState(exercicesText[0])

    useEffect(()=> {
        hablar("Welcome to the English Tests. Please, read the questions and select your choice.")
    },[])

  const handleNextStep = () => {
    // Guardar los datos del paso actual en sessionStorage antes de pasar al siguiente paso
    // TO DO - que datos hace falta guardar cada vez que pasas al siguiente step
    // setStep(step + 1);
    setStep(prevStep => {
        let stepTMP = prevStep
        stepTMP++
        return stepTMP
    });
    setAlreadySuccess(false)
    setAlreadyFailed(false)
    setButtonsDisabled(true)
    switch (step) {
        case 3:
            setExercicesTitles("Exercice results")
            break

        case 5:
            setExercicesTitles(exercicesText[1])
            break
        default:

    }
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

  const ShowArrayPossibleReplies = () => {
    return (
        <p>
            { 
            arrayPosibleReplies.map ((reply, index)=> 
                <span key={index} onClick={() => checkAnswer(index)}>
                    {reply} 
                </span>
            )
            }
        </p>
    )
  }

  const ShowExerciceResults = () => {
    return (
        <>
            <h4>Exercie Results:</h4>
            <p>Success: {success}</p>
            <p>Failed: {fail}</p>
        </>
    )
  }


  const checkAnswer = (answerCheck) => {
    let textoHablar = ""
    console.log(answerCheck)
    console.log(arrayQuestions1[step-1])
    if(arrayQuestions1[step-1].keyAnswer === answerCheck) {
      console.log(" es Correcto") 
        // setButtonsDisabled(prevButtonDisabled => {
        //     const buttonsDisabledTMP = [...buttonsDisabled]
        //     buttonsDisabledTMP[step-1]=false
        //     return buttonsDisabledTMP
        // })
        setButtonsDisabled(false)
        textoHablar = `${arrayQuestions1[step-1].textAnswer}, is correct!`
        if (!alreadyFailed && !alreadySuccess)
            setSuccess(prevSuccess => {
                let successTMP = prevSuccess
                successTMP++
                return successTMP
            })
        setAlreadySuccess(true)
    }
    else {
        console.log(" es Incorrecto")
        debugger
        textoHablar = "Sorry, it's not correct!"
        if (!alreadyFailed && !alreadySuccess) {
            setFail(prevFail => {
                let failTMP = prevFail
                failTMP++
                return failTMP
            })
        }
        setAlreadyFailed(true)    
    }
    hablar(textoHablar)
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
      <h3>{exercicesTitles}</h3>
      <h4>Success: {success} Fails: {fail}</h4>
      
      {step === 1 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          {<ShowArrayPossibleReplies />}
          <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          {<ShowArrayPossibleReplies />}
          <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
            <p>{arrayQuestions1[step-1].textQuestion}</p>
            {<ShowArrayPossibleReplies />}
            <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
        </div>
      )}

      {/* 
      {step === 4 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          {<ShowArrayPossibleReplies />}
          <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>

        </div>
      )}

      {step === 5 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          {<ShowArrayPossibleReplies />}
          <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>

        </div>
      )}

      {step === 6 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          {<ShowArrayPossibleReplies />}
          <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>

        </div>
      )}

      {step === 7 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          {<ShowArrayPossibleReplies />}
          <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>

        </div>
      )}

      {step === 8 && (
        <div>
          <p>{arrayQuestions1[step-1].textQuestion}</p>
          {<ShowArrayPossibleReplies />}
          <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>

        </div>
      )}
 */}
      {step === 4 && (
        <div>
          {<ShowExerciceResults />}
          <button onClick={handleNextStep}>Next exercice</button>

        </div>
      )}
      {step === 5 && (
        <div>
          {<ShowExerciceResults />}
          <button onClick={handleNextStep}>Next exercice2</button>

        </div>
      )}
      {step === 6 && (
        <div>
          {<ShowExerciceResults />}
          <button onClick={handleNextStep}>Next exercice2</button>

        </div>
      )}
    
      {step === 19 && (
        <div>
          <h2>Test Finished !!</h2>
          <button onClick={handleReboot}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}

export default EnglishTests;