import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton, Card } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
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

    //Style
    const style = {
        card: {
            display: 'absolute',  
            justifyContent:'center', 
            alignItems:'center',
            height: 600,
            width: (!isDesktop) ? "97%" : "auto",
            margin: (!isDesktop) ? 0 : 100,
            marginTop: (!isDesktop) ? "20%" : 100,
            textAlign: "center",
            border: "5px solid purple"
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

    const handleAnswer = () => {
        switch(questionNum) {
            case 1:
                return (
                <>
                    <button onClick={(e, value) => handleAnswerFirstBirth(e, "Yes")}>Yes</button>
                    <button onClick={(e, value) => handleAnswerFirstBirth(e, "No")}>No</button>
                </>)
            case 2:
                return (<>
                    <textarea onChange={handleAnswerEnvision}></textarea>
                </>)
            case 3:
                return (<>
                    <textarea onChange={handleAnswerWhy}></textarea>
                </>)
            case 4:
                return (<>
                    <textarea onChange={handleAnswerMidwifery}></textarea>
                </>)
            case 5:
                return (<>
                    <textarea onChange={handleAnswerConcerns}></textarea>
                </>)
            case 6:
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
                        ? <ArrowBackIcon /> 
                        : <IconButton> 
                            <ArrowBackIcon onClick={prevQuestion} />
                         </IconButton>}
                    </Grid>
                    <Grid item md="10" xs="10">
                        <Typography style={style.question}>{QuestionData.data[questionNum].question}</Typography>
                            {handleAnswer()}
                    </Grid>
                    <Grid item md="1" xs="1">
                        {(questionNum === QuestionData.data.length - 1) 
                        ? <ArrowForwardIcon /> 
                        : <IconButton>
                            <ArrowForwardIcon onClick={nextQuestion} />
                          </IconButton>}
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