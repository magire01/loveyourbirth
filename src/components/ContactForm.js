import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Card } from "@material-ui/core";

import QuestionData from "../utilities/questions.json";

import '@fontsource/roboto';

const ContactForm = () => {

      //Nav Rendering for Smartphone vs Laptop
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

    const style = {
        card: {
            display: 'absolute',  
            justifyContent:'center', 
            alignItems:'center',
            height: 600,
            width: (!isDesktop) ? "100%" : "auto",
            margin: (!isDesktop) ? 0 : 100,
            marginTop: (!isDesktop) ? "20%" : 100,
            textAlign: "center"
        },
        title: {
            marginTop: 20,
            marginBottom: 20
        },
        question: {
            marginTop: 20,
            marginBottom: 20
        },
        input: {
            marginTop: 20,
            marginBottom: 20
        },
        button: {
            marginTop: 20,
            marginBottom: 20
        }
    }

    const [questionNum, setQuestionNum] = useState(0)

    const nextQuestion = (e) => {
        e.preventDefault();
        setQuestionNum(questionNum + 1)
    }

    const prevQuestion = (e) => {
        e.preventDefault();
        setQuestionNum(questionNum - 1)
    }

    const [answer, setAnswer] = useState({
        name: ""
    })

    const handleAnswerName = (e) => {
        setAnswer({ ...answer, name: e.target.value })
    }

    const handleAnswerPhone = (e) => {
        setAnswer({ ...answer, phone: e.target.value })
    }

    const handleAnswerEmail = (e) => {
        setAnswer({ ...answer, email: e.target.value })
    }

    const handleAnswerCity = (e) => {
        setAnswer({ ...answer, city: e.target.value })
    }
    const handleAnswerContactPref = (e, selection) => {
        e.preventDefault();
        setAnswer({ ...answer, contact: selection})
    }
    const handleAnswerFirstBirth = (e, selection) => {
        e.preventDefault();
        setAnswer({ ...answer, firstBirth: selection})
        if(selection === "No") {
            setQuestionNum(questionNum + 1)
        } else {
            setQuestionNum(questionNum + 2)
        }
    }
    const handleAnswerBirthComplications = (e, selection) => {
        e.preventDefault();
        setAnswer({ ...answer, birthComplications: selection })
    }
    const handleAnswerNewbornComplications = (e, selection) => {
        e.preventDefault();
        setAnswer({ ...answer, newbornComplications: selection })
    }
    const handleAnswerHomeBirth = (e, selection) => {
        e.preventDefault();
        setAnswer({ ...answer, homeBirth: selection })
    }
    const handleAnswerHealthConditions = (e, selection) => {
        e.preventDefault();
        setAnswer({ ...answer, healthConditions: selection })
    }
    const handleAnswerVBAC = (e, selection) => {
        e.preventDefault();
        setAnswer({ ...answer, VBAC: selection })
    }
    const handleAnswerEnvision = (e) => {
        e.preventDefault();
        setAnswer({ ...answer, envision: e.target.value })
    }
    const handleAnswerWhy = (e) => {
        e.preventDefault();
        setAnswer({ ...answer, why: e.target.value })
    }
    const handleAnswerMidwifery = (e) => {
        e.preventDefault();
        setAnswer({ ...answer, midwifery: e.target.value })
    }
    const handleAnswerConcerns = (e) => {
        e.preventDefault();
        setAnswer({ ...answer, concerns: e.target.value })
    }
    const handleAnswerRefer = (e) => {
        e.preventDefault();
        setAnswer({ ...answer, refer: e.target.value })
    }

    const handleAnswer = () => {
        switch(questionNum) {
            case 1:
                return (
                <>
                    <button onClick={(e, value) => handleAnswerFirstBirth(e, "Yes")}>Yes</button>
                    <button onClick={(e, value) => handleAnswerFirstBirth(e, "No")}>No</button>
                </>)
            case 2: 
                return (
                <>
                    <Typography>Have you ever experienced complications during pregnancy, birth, or postpartum?</Typography>
                    <button onClick={(e, value) => handleAnswerBirthComplications(e, "Yes")}>Yes</button>
                    <button onClick={(e, value) => handleAnswerBirthComplications(e, "No")}>No</button>
                    <Typography>Were there any newborn complications with previous births?</Typography>
                    <button onClick={(e, value) => handleAnswerNewbornComplications(e, "Yes")}>Yes</button>
                    <button onClick={(e, value) => handleAnswerNewbornComplications(e, "No")}>No</button>
                    <Typography>Have you had a home birth before?</Typography>
                    <button onClick={(e, value) => handleAnswerHomeBirth(e, "Yes")}>Yes</button>
                    <button onClick={(e, value) => handleAnswerHomeBirth(e, "No")}>No</button>
                </>)
            case 3:
                return (
                <>
                    <Typography>Do you have any major health conditions?</Typography>
                    <button onClick={(e, value) => handleAnswerHealthConditions(e, "Yes")}>Yes</button>
                    <button onClick={(e, value) => handleAnswerHealthConditions(e, "No")}>No</button>
                    <Typography>Are you anticipating a VBAC?</Typography>
                    <button onClick={(e, value) => handleAnswerVBAC(e, "Yes")}>Yes</button>
                    <button onClick={(e, value) => handleAnswerVBAC(e, "No")}>No</button>
                    <button onClick={(e, value) => handleAnswerVBAC(e, "IDK")}>I don't know</button>
                    
                </>)
            case 4:
                return (<>
                    <textarea onChange={handleAnswerEnvision}></textarea>
                </>)
            case 5:
                return (<>
                    <textarea onChange={handleAnswerWhy}></textarea>
                </>)
            case 6:
                return (<>
                    <textarea onChange={handleAnswerMidwifery}></textarea>
                </>)
            case 7:
                return (<>
                    <textarea onChange={handleAnswerConcerns}></textarea>
                </>)
            case 8:
                return (<>
                    <textarea onChange={handleAnswerRefer}></textarea>
                </>)
            default:
                return (
                <>
                    <p>Name</p> <input defaultValue="" onChange={handleAnswerName}/>
                    <p>Phone</p> <input defaultValue="" onChange={handleAnswerPhone} />
                    <p>Email</p> <input defaultValue="" onChange={handleAnswerEmail} />
                    <p>City/State</p> <input defaultValue="" onChange={handleAnswerCity} />
                    <p>Preferred Method of Contact</p> <button onClick={(e, value) => handleAnswerContactPref(e, "Email")}>Email</button><button onClick={(e, value) => handleAnswerContactPref(e, "Phone")}>Phone</button>
                </>)
            
        }
    }
    
    return (
        <>
            <Card style={style.card}>
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    <Grid item md="12" xs="12">
                        <Typography style={style.title}>Please answer the following questions</Typography>
                    </Grid>
                    <Grid item md="1" xs="1">
                        {(questionNum === 0) 
                        ? <p> - </p> 
                        : <button onClick={prevQuestion}> - </button>}
                    </Grid>
                    <Grid item md="10" xs="10">
                        <Typography style={style.question}>{QuestionData.data[questionNum].question}</Typography>
                            {handleAnswer()}
                    </Grid>
                    <Grid item md="1" xs="1">
                        {(questionNum === QuestionData.data.length - 1) 
                        ? <p> + </p> 
                        : <button onClick={nextQuestion}> + </button>}
                    </Grid>
                    <Grid item md="12" xs="12">
                        {(questionNum === QuestionData.data.length - 1) 
                        ? <Button style={style.button}>Submit</Button> 
                        : <Button onClick={nextQuestion} style={style.button}>Next</Button>}
                    </Grid>        
                </Grid>
            </Card>
        </>
    )
}

export default ContactForm;