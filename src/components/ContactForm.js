import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton, LinearProgress } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';
import QuestionData from "../utilities/questions.json";
import emailjs from 'emailjs-com';
import '@fontsource/roboto';

const ContactForm = (props) => {
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

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_brv7il1', 'template_aldpnbc', 
        { 
            name: answer.name, 
            city: answer.city, 
            phone: answer.phone,
            email: answer.email, 
            contact: answer.contact,
            firstBirth: answer.firstBirth,
            envision: answer.envision,
            why: answer.why,
            midwifery: answer.midwifery,
            concerns: answer.concerns,
            refer: answer.refer
        }, 'user_VCNwVyQVStaLfnvdfDv4t')
        .then((result) => {
            console.log(result.text);
            props.successConsult();
        }, (error) => {
            console.log(error.text);
        });
        props.closeForm();
    };
    

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
            height: (!isDesktop) ? 60 : 80,
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
            // position: "absolute", 
            // bottom: (!isDesktop) ? "40%" : "10%",
            color: "white",
            backgroundColor: "#d9b3ff"
        },
        questionSection: {
            height: (!isDesktop) ? 200 : 400,
            marginBottom: 100
        },
        questionSection2: {
            height: (!isDesktop) ? 400 : 400,
            marginBottom: "3%",
            paddingLeft: (!isDesktop) ? 10: 0
        },
        questionSection3: {
            height: (!isDesktop) ? 200: 300
        },
        smallInput: {
            width: (!isDesktop) ? 200: 350,
            
        },
        largeInput: {
            width: (!isDesktop) ? "90%": 500,
            height: (!isDesktop) ? "60%": 200,
            margin: (!isDesktop) ? "5%": "5%"
        },
        progress: {
            marginLeft: "3%",
            marginRight: "3%",
            width: "100%"
        },
        nextButtonActive: {
            color: "blue"
        },
        nextButtonDisabled: {
            color: "white"
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
            case 8:
                return (<>
                        <Typography style={style.answer}>What Day Of the Week Do you prefer for a consult?</Typography>
                        <button>Monday</button> <button>Tuesday</button> <button>Wednesday</button> <button>Thursday</button> <button>Friday</button> <button> Saturday</button> <button>Sunday</button>
                    
                        <Typography style={style.answer}>Preferred Time of Day</Typography>
                        <button>Morning</button><button>Afternoon</button><button>Evening</button>
                        <Typography style={style.answer}>Do you Prefer In Person or Telephone Consult?</Typography>
                        <button>In Person</button> <button>Phone</button>
                </>)
            default:
                return (
                <>
                    <Typography style={style.answerText}>Name</Typography> <input style={style.smallInput} value={answer.name} onChange={handleAnswerName}/>
                    <Typography style={style.answerText}>City, State</Typography> <input style={style.smallInput} value={answer.city} onChange={handleAnswerCity} />
                </>)
            
        }
    }
    
    return (
        <div>
            <Grid container direction="row" alignItems="center" justifyContent="center"  style={{ paddingLeft: 0, paddingRight: (!isDesktop) ? "4%" : 0 }}>
                <Grid container direction="row" alignItems="left" justifyContent="left">
                    <IconButton>
                        <CloseIcon onClick={props.closeForm} />
                    </IconButton>
                        <LinearProgress variant="determinate" value={progress} style={style.progress} />
                </Grid>
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    <Grid item md="1" xs="1">
                        {(questionNum === 0) 
                        ? <IconButton> 
                            <ArrowBackIcon style={style.nextButtonDisabled}/>
                        </IconButton>
                        : <IconButton onClick={prevQuestion}> 
                            <ArrowBackIcon style={style.nextButtonActive} />
                         </IconButton>}
                    </Grid>
                    <Grid item md="10" xs="10" style={style.questionSection2}>
                        <Typography style={style.question}>{QuestionData.data[questionNum].question}</Typography>
                        <div style={style.questionSection3}>
                            {handleAnswer()}
                        </div>
                        <Grid item md="12" xs="12">
                            {(questionNum === QuestionData.data.length - 1) 
                            ? <Button onClick={sendEmail} style={style.submit}>Submit</Button> 
                            : <Button onClick={nextQuestion} style={style.submit}>Next</Button>}
                        </Grid> 
                    </Grid>
                    <Grid item md="1" xs="1">
                        {(questionNum === QuestionData.data.length - 1) 
                        ? <IconButton>
                            <ArrowForwardIcon style={style.nextButtonDisabled}/>
                        </IconButton>
                        : <IconButton onClick={nextQuestion}>
                            <ArrowForwardIcon style={style.nextButtonActive}/>
                          </IconButton>}
                    </Grid>
                           
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactForm;