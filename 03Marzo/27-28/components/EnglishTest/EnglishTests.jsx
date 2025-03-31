import React, { useState, useEffect } from 'react';
import styles from "./EnglishTests.module.css";
// import "./EnglishTests.module.css";
import one from "../../assets/EnglishTests/Blue-Eyes_512x512.png"
import two from "../../assets/EnglishTests/girl-curly-red-hair_459x612.png"
import three from "../../assets/EnglishTests/woman-straigth-long-hair-400x400.png"
import four from "../../assets/EnglishTests/bald-men-920x630.png"
import five from "../../assets/EnglishTests/men-beard-moustache.png"
import six from "../../assets/EnglishTests/woman-short-blond-hair-320x370.png"
import seven from "../../assets/EnglishTests/tall-thin-man-with-923x1600.jpg"
import eigth from "../../assets/EnglishTests/short-overweight-484x764.png"
import nine from "../../assets/EnglishTests/short-overweight-484x764.png"

// Formulario de múltiples pasos

const exercicesText = [  // texto Ejercicios 1 y 2
    "Exercice 1- Click the adjetive that match to the definition", "Exercice 2- Match the image with descripcion" ]
// array Ejercicio 1 posibles respuestas
const arrayPosibleReplies= ["friendly", "talkative", "generous", "kind", "lazy", "funny", "clever", "shy",]
// array con Preguntas y respuestas
const arrayQuestions1 = [
    {textQuestion: "A person who is quick at learning and understanding is ...", textAnswer: "clever", keyAnswer: 6},
    {textQuestion: "A person who is open and warm is ...", textAnswer: "kind", keyAnswer: 3},
    {textQuestion: "A person who makes people laugh is ...", textAnswer: "funny", keyAnswer: 5},
    {textQuestion: "A person who likes giving people things is ...", textAnswer: "generous", keyAnswer: 2},
    {textQuestion: "A person who is friendly and good to other people is ...", textAnswer: "friendly", keyAnswer: 0},
    {textQuestion: "A person who doesn't want to work is ...", textAnswer: "lazy", keyAnswer: 4},
    {textQuestion: "A person who can't talk easily to people he/she doesn't know is ...", textAnswer: "shy", keyAnswer: 7},
    {textQuestion: "A person who talks a lot is ...", textAnswer: "talkative", keyAnswer: 1},
]
// array Ejercicio 2 posible respuestas
const arrayPosibleReplies2 = [ one, two, three, four, five, six, seven, eigth, nine ]
// array con Preguntas y respuestas
const arrayQuestions2 = [
    {text: "She has curly red hair", answer: "1"},
    {text: "She has long straight hair", answer: "2"},
    {text: "She has big blue eyes", answer: "0"},
    {text: "She has short blonde hair", answer: "5"},
    {text: "He has beard and moustache", answer: "4"},
    {text: "He's bald", answer: "3"},
    {text: "He's very tall and thin", answer: "6"},
    {text: "He's medium height and very slim", answer: "7"},
    {text: "He's quite short and a bit overweight", answer: "8"},
]
// Valores del Select del Ejercicio2
const arrayReplies2 = ["", 0, 1, 2, 3, 4, 5, 6, 7, 8]

function EnglishTests() {
/// estudiar!!  // Para el Ejercicio1, manejo de los estilos al fallar o acertar al pulsar en una posible respuesta
    const [answerStyles, setAnswerStyles] = useState(new Array(arrayPosibleReplies.length).fill(null));
///
    const [step, setStep] = useState(1); // manejo del estado del paso actual
  // usar para guardar nombre de un input
    const [buttonsDisabled, setButtonsDisabled] = useState(true)                  // desactiva o no los botones
  // sessionStorage.setItem('nombre', nombre);
    const [success, setSuccess] = useState(0)                                   // marcador de acierto
    const [fail, setFail] = useState(0)                                         // marcador de fallos
    const [alreadySuccess, setAlreadySuccess] = useState(false)                 // detector de si ya acertó
    const [alreadyFailed, setAlreadyFailed] = useState(false)                   // detector de si ya falló
    const [exercicesTitles, setExercicesTitles] = useState(exercicesText[0])    // Titulo del ejercicio actual
    const [arrayPosibleReplies2Selected, setArrayPosibleReplies2Selected] = useState(new Array(9).fill("")); // ejercicio2 respuestas seleccionadas

    // useEffect(()=> {
    //     hablar("Welcome to the English Tests. Please, read the questions and select your choice.")
    // },[])

// handle functions
    const handleNextStep = () => {
        // Guardar los datos del paso actual en sessionStorage antes de pasar al siguiente paso
        setStep(prevStep => {
            let stepTMP = prevStep +1
            // stepTMP++
            debugger
            if (stepTMP === 11) {
                setSuccess(0);
                setFail(0);
        
                for (let index = 0; index < arrayQuestions2.length; index++) {
                    // const element = array[index];
                    debugger
                    if (arrayQuestions2[index].answer === arrayPosibleReplies2Selected[index])
                        setSuccess(prevSuccess => prevSuccess +1)
                    else
                        setFail(prevFail =>prevFail +1)
                }
            }
            if (stepTMP === 10) setExercicesTitles(exercicesText[1])

            return stepTMP
        });
        setAnswerStyles(new Array(arrayPosibleReplies.length).fill(null));
        setAlreadySuccess(false)
        setAlreadyFailed(false)
        setButtonsDisabled(true)
    };

    const handleReboot = () => {
        setStep(1)
        setAnswerStyles(new Array(arrayPosibleReplies.length).fill(null));
        setAlreadySuccess(false)
        setAlreadyFailed(false)
        setButtonsDisabled(true)
    }

    const ShowExerciceResults = () => {
        return (
            <>
                <h4>Exercise Results:</h4>
                <p>Success: {success}</p>
                <p>Failed: {fail}</p>
            </>
        )
    }

    const checkAnswer = (answerCheck, event) => {
        let textoHablar = ""
        console.log(answerCheck)
        console.log(arrayQuestions1[step-1])
        if(arrayQuestions1[step-1].keyAnswer === answerCheck) {
            console.log(" es Correcto") 
            setAnswerStyles(prevStyles => {
            const updatedStyles = [...prevStyles];
                updatedStyles[answerCheck] = { backgroundColor: "green", color: "white" };
                return updatedStyles;
            });
        
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
            setAnswerStyles(prevStyles => {
            const updatedStyles = [...prevStyles];
            updatedStyles[answerCheck] = { backgroundColor: "red", color: "white" };
            return updatedStyles;
            });
            textoHablar = `Sorry, ${event.target.innerHTML} it's not correct!`
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
        debugger
        const availableVoices = window.speechSynthesis.getVoices()
        console.log("Voces disponibles: ", availableVoices)
        const spanishVoices = availableVoices.filter(voice => voice.lang === "es-ES")
        console.log("Voces españolas: ", spanishVoices)
        // const texto = "Hola, buenos dias!";
        const speech = new SpeechSynthesisUtterance(texto);
        speech.lang = "en-EN";
        speech.onend = () => {
            console.log("Speech ended");
        };
        // Trigger the speech synthesis
        debugger
        window.speechSynthesis.speak(speech);
    }

    // Funciones Ejercicio1
    const ShowArrayPossibleReplies = () => {
        return (
            <p>
                {arrayPosibleReplies.map ((reply, index)=> 
                    <span key={index}
                        onClick={(e) => checkAnswer(index, e)}
                        style={answerStyles[index]}
                    >
                        {reply} 
                    </span>
                )}
            </p>
        )
    }

    // Funciones Ejercicio2
    const ArrayQuestions2Selected = () => {
        return (
            <>
                {arrayReplies2.map((reply, index)=> 
                    <option key={index} value={reply}>{reply}</option>
                )}
            </>
        )
    }

    const ShowArrayPossibleReplies2 = () => {
        return (
        <div className={styles.leftColumn}>
            {arrayPosibleReplies2.map ((reply, index)=> 
                <div key={index} className={styles.spanImage}>
                    <span className={styles.imgNr}>{index}</span>
                    <img src={reply} alt={"image"+{index}} />
                </div>
            )}
        </div>
        )
    }

    const ShowArrayQuestions2 = () => {
        return (
            <div className={styles.rightColumn}>
                {arrayQuestions2.map ((question, index)=> 
                    <p key={index}
                    
                    >
                        <select name="arrayQuestions2Selected" id="arrayQuestions2Selected"
                            onChange={(event) => handleSelectArrayQuestions2SelectedChange(event, index)}
                            value = {arrayPosibleReplies2Selected[index]}
                        >
                            <ArrayQuestions2Selected />
                        </select>
                        {question.text} 
                    </p>
                )}
            </div>
        )

    }

    const handleSelectArrayQuestions2SelectedChange = (event, index) => {
        const newSelectedValues = [...arrayPosibleReplies2Selected];
        newSelectedValues[index] = event.target.value || ""; // Guarda el valor seleccionado
        setArrayPosibleReplies2Selected(newSelectedValues); // Actualiza el estado
        const desabilitarBotones = newSelectedValues.includes("") // check si todas las opciones están en uso
        setButtonsDisabled(desabilitarBotones)
    }

    return (
        <div className={styles.pagecontainer}>
            <h1>English Tests</h1>
            <h3>{exercicesTitles}</h3>
            {step === 1 && (
                <div className={styles.exercice1}>
                    <p>{arrayQuestions1[step-1].textQuestion}</p>
                    {<ShowArrayPossibleReplies />}
                    <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
                </div>
            )}

            {step === 2 && (
                <div className={styles.exercice1}>
                    <p>{arrayQuestions1[step-1].textQuestion}</p>
                    {<ShowArrayPossibleReplies />}
                    <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
                </div>
            )}

            {step === 3 && (
                <div className={styles.exercice1}>
                    <p>{arrayQuestions1[step-1].textQuestion}</p>
                    {<ShowArrayPossibleReplies />}
                    <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
                </div>
            )}

            {step === 4 && (
                <div className={styles.exercice1}>
                    <p>{arrayQuestions1[step-1].textQuestion}</p>
                    {<ShowArrayPossibleReplies />}
                    <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
                </div>
            )}

            {step === 5 && (
                <div className={styles.exercice1}>
                    <p>{arrayQuestions1[step-1].textQuestion}</p>
                    {<ShowArrayPossibleReplies />}
                    <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
                </div>
            )}

            {step === 6 && (
                <div className={styles.exercice1}>
                    <p>{arrayQuestions1[step-1].textQuestion}</p>
                    {<ShowArrayPossibleReplies />}
                    <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
                </div>
            )}

            {step === 7 && (
                <div className={styles.exercice1}>
                    <p>{arrayQuestions1[step-1].textQuestion}</p>
                    {<ShowArrayPossibleReplies />}
                    <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
                </div>
            )}

            {step === 8 && (
                <div className={styles.exercice1}>
                    <p>{arrayQuestions1[step-1].textQuestion}</p>
                    {<ShowArrayPossibleReplies />}
                    <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
                </div>
            )}

            {step === 9 && (
                <div className={styles.exercice1}>
                    {<ShowExerciceResults />}
                    <button onClick={handleNextStep}>Next exercise2</button>
                </div>
            )}
            {step === 10 && (
                <div className={styles.exercice2}>
                    {<ShowArrayPossibleReplies2 />}
                    {<ShowArrayQuestions2 />}
                    <p></p>
                    <button onClick={handleNextStep} disabled={buttonsDisabled}>Next</button>
                </div>
            )}

            {step === 11 && (
                <div className={styles.exercice1}>
                    {<ShowExerciceResults />}
                    <button onClick={handleNextStep}>Next exercice</button>
                </div>
            )}


            {step === 12 && (
                <div>
                    <h2>Test Finished !!</h2>
                    <button onClick={handleReboot}>Reiniciar</button>
                </div>
            )}
        </div>
    );
}

export default EnglishTests;