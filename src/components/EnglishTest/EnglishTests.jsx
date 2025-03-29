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
const arrayPosibleReplies= ["friendly", "talkative", "generous", "kind", "lazy", "funny", "clever", "shy",]
const exercicesText = [ 
    "Exercice 1- Click the adjetive that match to the definition", "Exercice 2- Match the image with descripcion" ]

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

const arrayPosibleReplies2 = [ one, two, three, four, five, six, seven, eigth, nine ]
const arrayQuestions2 = [
    {text: "She has curly red hair", reply: "2"},
    {text: "She has long straight hair", reply: "3"},
    {text: "She has big blue eyes", reply: "1"},
    {text: "She has short blonde hair", reply: "6"},
    {text: "He has beard and moustache", reply: "5"},
    {text: "He's bald", reply: "4"},
    {text: "He's very tall and thin", reply: "7"},
    {text: "He's medium height and very slim", reply: "8"},
    {text: "He's quite short and a bit overweight", reply: "8"},
]

function EnglishTests() {
/// estudiar!!
    const [answerStyles, setAnswerStyles] = useState(new Array(arrayPosibleReplies.length).fill(null));
///

    const [step, setStep] = useState(1);
  // usar para guardar nombre de un input
  // nota al final del ejercicio
    const [buttonsDisabled, setButtonsDisabled] = useState(true)                  // desactiva o no los botones
  // sessionStorage.setItem('nombre', nombre);
    const [success, setSuccess] = useState(0)                                   // marcador de acierto
    const [fail, setFail] = useState(0)                                         // marcador de fallos
    const [alreadySuccess, setAlreadySuccess] = useState(false)                 // detector de si ya acertó
    const [alreadyFailed, setAlreadyFailed] = useState(false)                   // detector de si ya falló
    const [exercicesTitles, setExercicesTitles] = useState(exercicesText[0])    // Titulo del ejercicio actual

    // useEffect(()=> {
    //     hablar("Welcome to the English Tests. Please, read the questions and select your choice.")
    // },[])

    const handleNextStep = () => {
        // Guardar los datos del paso actual en sessionStorage antes de pasar al siguiente paso
        // TO DO - que datos hace falta guardar cada vez que pasas al siguiente step
        // setStep(step + 1);
        setStep(prevStep => {
            let stepTMP = prevStep
            stepTMP++
            return stepTMP
        });
        setAnswerStyles(new Array(arrayPosibleReplies.length).fill(null));
        setAlreadySuccess(false)
        setAlreadyFailed(false)
        setButtonsDisabled(true)
        switch (step) {
            case 9:
                setExercicesTitles("Exercice results")
                break

            case 10:
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
            <p id="posibleReplies">
                {arrayPosibleReplies.map ((reply, index)=> 
                    <span key={index}
                    onClick={() => checkAnswer(index)}
                    style={answerStyles[index]}
                    >
                        {reply} 
                    </span>
                )}
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
        debugger
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

    const ShowArrayPossibleReplies2 = () => {
        return (
        <>
            {arrayPosibleReplies2.map ((reply, index)=> 
                <img key={index} src={reply} alt={"image"+{index}} />
            )}
        </>
        )
    }

    const ColumnLeft = () => {
        return (
        <ShowArrayPossibleReplies />
        )
    }
    const Exercice2 = () => {
        return (
        <div>
            <div id="columLeft">
            <ColumnLeft />
            </div>
            <div id="columnRight">

            </div>
        </div>
        )
    }

    return (
        <div className={styles.pagecontainer}>
            <h1>English Tests</h1>
            <h3>{exercicesTitles}</h3>
            {/* <h4>Success: {success} Fails: {fail}</h4> */}
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

            {/* {step === 4 && (
                <div>
                {<ShowArrayPossibleReplies2 />}
                <button onClick={handleNextStep}>Next exercice</button>

                </div>
            )} */}
            {/* {step ===  && (
                <div>
                {<Exercice2 />}
                <button onClick={handleNextStep}>Next exercice2</button>

                </div>
            )} */}
            {step === 9 && (
                <div>
                {<ShowExerciceResults />}
                <button onClick={handleNextStep}>Next exercice2</button>

                </div>
            )}
            
            {step === 10 && (
                <div>
                <h2>Test Finished !!</h2>
                <button onClick={handleReboot}>Reiniciar</button>
                </div>
            )}
        </div>
    );
}

export default EnglishTests;