import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton, Card, LinearProgress } from "@material-ui/core";
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


    //question # state
    const [questionNum, setQuestionNum] = useState(0)

    //progress bar
    const point = 100/QuestionData.data.length
    const [progress, setProgress] = useState(point)
    // useEffect(() => {
    //     const point = 100/QuestionData.data.length
    //     setProgress(progress + point)
    // }, [questionNum])

    const nextQuestion = (e) => {
        e.preventDefault();
        setQuestionNum(questionNum + 1)
        setProgress(progress + point)
    }

    const prevQuestion = (e) => {
        e.preventDefault();
        setQuestionNum(questionNum - 1)
        setProgress(progress - point)
    }

    const [answer, setAnswer] = useState({
        name: "",
        city: "",
        phone: "",
        email: "",
        contact: "",
        firstBirth: "",
        envision: "",
        why: "",
        midwifery: "",
        concerns: "",
        refer: ""
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
            display: 'fixed',  
            justifyContent:'center', 
            alignItems:'center',
            height: (!isDesktop) ? "60%" : "80%",
            width: (!isDesktop) ? "97%" : "auto",
            margin: (!isDesktop) ? 0 : 100,
            marginTop: (!isDesktop) ? 0 : 100,
            textAlign: "center",
            border: "5px solid purple",
            backgroundColor: "white"
        },
        title: {
            marginTop: 20,
            marginBottom: 20
        },
        question: {
            height: (!isDesktop) ? "50%" : "80%",
            marginTop: 20,
            marginBottom: (!isDesktop) ? 15 : 10,
            color: "purple",
            fontSize: (!isDesktop) ? 15 : 30,
            fontWeight: "bold"
        },
        answerText: {
            marginTop: (!isDesktop) ? 10 : 20,
            marginBottom: (!isDesktop) ? 10 : 10,
            color: "purple",
            fontSize: (!isDesktop) ? 10 : 20,
            fontWeight: "bold"
        },
        input: {
            marginTop: 20,
            marginBottom: 20
        },
        button: {
            marginBottom: 20
        },
        activeButton: {
            marginBottom: 20,
            backgroundColor: "blue",
            color: "white"

        },
        submit: { 
            position: "absolute", 
            bottom: (!isDesktop) ? "40%" : "10%",
            color: "white",
            backgroundColor: "#d9b3ff"
        },
        questionSection: {
            height: (!isDesktop) ? 200 : 400,
            marginBottom: 100
        },
        questionSection2: {
            height: (!isDesktop) ? 100 : 100,
            marginBottom: "3%"
        },
        questionSection3: {
            height: (!isDesktop) ? 200: 500
        },
        smallInput: {
            width: (!isDesktop) ? 200: 350,
            
        },
        largeInput: {
            width: (!isDesktop) ? "100%": 500,
            height: (!isDesktop) ? "70%": 200
        },
        progress: {
            margin: "5%",
            
        }
    }

    const handleAnswer = () => {
        switch(questionNum) {
            case 1:
                return (
                <>
                    <Typography style={style.answerText}>Phone</Typography> <input style={style.smallInput} value={answer.phone} onChange={handleAnswerPhone} />
                    <Typography style={style.answerText}>Email</Typography> <input style={style.smallInput} value={answer.email} onChange={handleAnswerEmail} />
                    <Typography style={style.answerText}>Preferred Method of Contact</Typography> <Button onClick={(e, value) => handleAnswerContactPref(e, "Email")} style={(answer.contact === "Email") ? style.activeButton : style.button}>Email</Button><Button onClick={(e, value) => handleAnswerContactPref(e, "Phone")} style={(answer.contact === "Phone") ? style.activeButton : style.button}>Phone</Button>
                </>
                )
            case 2:
                return (
                <>
                    <Button onClick={(e, value) => handleAnswerFirstBirth(e, "Yes")} style={(answer.firstBirth === "Yes") ? style.activeButton : style.button}>Yes</Button>
                    <Button onClick={(e, value) => handleAnswerFirstBirth(e, "No")} style={(answer.firstBirth === "No") ? style.activeButton : style.button}>No</Button>
                </>)
            case 3:
                return (<>
                    <textarea style={style.largeInput} value={answer.envision} onChange={handleAnswerEnvision}></textarea>
                </>)
            case 4:
                return (<>
                    <textarea style={style.largeInput} value={answer.why} onChange={handleAnswerWhy}></textarea>
                </>)
            case 5:
                return (<>
                    <textarea style={style.largeInput} value={answer.midwifery} onChange={handleAnswerMidwifery}></textarea>
                </>)
            case 6:
                return (<>
                    <textarea style={style.largeInput} value={answer.concerns} onChange={handleAnswerConcerns}></textarea>
                </>)
            case 7:
                return (<>
                    <input style={style.smallInput} value={answer.refer} onChange={handleAnswerRefer} />
                </>)
            default:
                return (
                <>
                    <Typography style={style.answerText}>Name</Typography> <input style={style.smallInput} value={answer.name} onChange={handleAnswerName}/>
                    <Typography style={style.answerText}>City/St</Typography> <input style={style.smallInput} value={answer.city} onChange={handleAnswerCity} />
                </>)
            
        }
    }
    
    return (
        <>
            
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    <Grid item md="12" xs="12">
                        <LinearProgress variant="determinate" value={progress} style={style.progress} />
                    </Grid>
                    <Grid item md="1" xs="1">
                        {(questionNum === 0) 
                        ? <ArrowBackIcon /> 
                        : <IconButton> 
                            <ArrowBackIcon onClick={prevQuestion} />
                         </IconButton>}
                    </Grid>
                    <Grid item md="10" xs="10" style={style.questionSection2}>
                        <Typography style={style.question}>{QuestionData.data[questionNum].question}</Typography>
                        <div style={style.questionSection3}>
                            {handleAnswer()}
                        </div>
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
                        ? <Button style={style.submit}>Submit</Button> 
                        : <Button onClick={nextQuestion} style={style.submit}>Next</Button>}
                    </Grid>        
                </Grid>
            
        </>
    )
}

export default ContactForm;