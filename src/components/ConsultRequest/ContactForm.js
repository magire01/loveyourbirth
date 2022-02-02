import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton, LinearProgress, Checkbox } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';
import QuestionData from "../../utilities/questions.json";
import emailjs from 'emailjs-com';
import '@fontsource/roboto';

import AnswerContact from "./Answers/AnswerContact";
import AnswerName from "./Answers/AnswerName";
import AnswerFirstBirth from "./Answers/AnswerFIrstBirth";
import AnswerDueDate from "./Answers/AnswerDueDate";
import AnswerSelectDays from "./Answers/AnswerSelectDays";
import AnswerSelectTime from "./Answers/AnswerSelectTime";

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
    
    //Checkbox - Select Days
    const checkSunday = () => {
        if(!answer.selectDays.sunday) {
            setAnswer({ ...answer, selectDays:{ ...answer.selectDays, sunday: true } })
        } else {
            setAnswer({ ...answer, selectDays: { ...answer.selectDays, sunday: false } })
        }
    } 
    const checkMonday = () => {
        if(!answer.selectDays.Monday) {
            setAnswer({ ...answer, selectDays:{ ...answer.selectDays, monday: true } })
        } else {
            setAnswer({ ...answer, selectDays: { ...answer.selectDays, monday: false } })
        }
    } 
    const checkTuesday = () => {
        if(!answer.selectDays.tuesday) {
            setAnswer({ ...answer, selectDays:{ ...answer.selectDays, tuesday: true } })
        } else {
            setAnswer({ ...answer, selectDays: { ...answer.selectDays, tuesday: false } })
        }
    } 
    const checkWednesday = () => {
        if(!answer.selectDays.wednesday) {
            setAnswer({ ...answer, selectDays:{ ...answer.selectDays, wednesday: true } })
        } else {
            setAnswer({ ...answer, selectDays: { ...answer.selectDays, wednesday: false } })
        }
    }
    const checkThursday = () => {
        if(!answer.selectDays.thursday) {
            setAnswer({ ...answer, selectDays:{ ...answer.selectDays, thursday: true } })
        } else {
            setAnswer({ ...answer, selectDays: { ...answer.selectDays, thursday: false } })
        }
    } 
    const checkFriday = () => {
        if(!answer.selectDays.friday) {
            setAnswer({ ...answer, selectDays:{ ...answer.selectDays, friday: true } })
        } else {
            setAnswer({ ...answer, selectDays: { ...answer.selectDays, friday: false } })
        }
    } 
    const checkSaturday = () => {
        if(!answer.selectDays.saturday) {
            setAnswer({ ...answer, selectDays:{ ...answer.selectDays, saturday: true } })
        } else {
            setAnswer({ ...answer, selectDays: { ...answer.selectDays, saturday: false } })
        }
    } 
    //Checkbox - SelectTime
    const checkMorning = () => {
        if(!answer.selectTime.morning) {
            setAnswer({ ...answer, selectTime: { ...answer.selectTime, morning: true } })
        } else {
            setAnswer({ ...answer, selectTime: { ...answer.selectTime, morning: false } })
        }
    }
    const checkAfternoon = () => {
        if(!answer.selectTime.afternoon) {
            setAnswer({ ...answer, selectTime: { ...answer.selectTime, afternoon: true } })
        } else {
            setAnswer({ ...answer, selectTime: { ...answer.selectTime, afternoon: false } })
        }
    }
    const checkEvening = () => {
        if(!answer.selectTime.evening) {
            setAnswer({ ...answer, selectTime: { ...answer.selectTime, evening: true } })
        } else {
            setAnswer({ ...answer, selectTime: { ...answer.selectTime, evening: false } })
        }
    }
    
    //question # state
    const [questionNum, setQuestionNum] = useState(0)

    const [errValidation, setErrValidation] = useState({
        name: false,
        city: false,
        email: false,
        phone: false
    })

    //progress bar
    const point = 100/QuestionData.data.length
    const [progress, setProgress] = useState(point)

    const nextQuestion = (e) => {
        e.preventDefault();
        if (questionNum === 0 && answer.name == "")
        {
            setErrValidation({ ...errValidation, name: true})
        } else if (questionNum == 0 && answer.city == "") {
            setErrValidation({ ...errValidation, city: true})
        } else if (questionNum === 1 && answer.email == "") {
            setErrValidation({ ...errValidation, email: true})
        } else if (questionNum === 1 && answer.phone == "") {
            setErrValidation({ ...errValidation, phone: true})
        } else {
            setQuestionNum(questionNum + 1)
            setProgress(progress + point)
        }
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
        dueDate: "",
        envision: "",
        why: "",
        midwifery: "",
        concerns: "",
        selectDays: {
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false
        },
        selectTime: {
            morning: false,
            afternoon: false,
            evening: false
        },
        refer: "",
        consultPreference: ""
    })

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

    const handleConsultPreference = (e, selection) => {
        e.preventDefault();
        setAnswer({ ...answer, consultPreference: selection})
    }

    const handleAllAnswers = (e, question, value) => {
        switch(question) {
            case "city":
                return setAnswer({ ...answer, city: value })
            case "phone":
                return setAnswer({ ...answer, phone: value})
            case "email":
                return setAnswer({ ...answer, email: value})
            case "contact":
                return setAnswer({ ...answer, contact: value})
            case "firstBirth":
                return setAnswer({ ...answer, firstBirth: value})
            case "dueDate":
                return setAnswer({ ...answer, dueDate: value})
            case "envision":
                return setAnswer({ ...answer, envision: value})
            case "why":
                return setAnswer({ ...answer, why: value})
            case "midwifery":
                return setAnswer({ ...answer, midwifery: value})
            case "concerns":
                return setAnswer({ ...answer, concerns: value})
            case "refer":
                return setAnswer({ ...answer, refer: value})
            case "preference":
                return setAnswer({ ...answer, preference: value})
            default:
                return setAnswer({ ...answer, name: value })
        }
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_sa2sv31', 'template_aldpnbc', 
        { 
            name: answer.name, 
            city: answer.city, 
            phone: answer.phone,
            email: answer.email, 
            contact: answer.contact,
            firstBirth: answer.firstBirth,
            dueDate: answer.dueDate,
            envision: answer.envision,
            why: answer.why,
            midwifery: answer.midwifery,
            concerns: answer.concerns,
            refer: answer.refer,
            days: Object.keys(answer.selectDays).filter(key => answer.selectDays[key]),
            time: Object.keys(answer.selectTime).filter(key => answer.selectTime[key]),
            preference: answer.consultPreference
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
        answerTextErr: {
            marginTop: (!isDesktop) ? 10 : 20,
            marginBottom: (!isDesktop) ? 10 : 10,
            color: "red",
            fontSize: (!isDesktop) ? 10 : 20,
            fontWeight: "bold"
        },
        answerTextBold: {
            marginTop: (!isDesktop) ? 10 : 20,
            marginBottom: (!isDesktop) ? 10 : 10,
            color: "purple",
            fontSize: (!isDesktop) ? 10 : 20,
        },
        input: {
            marginTop: 20,
            marginBottom: 20
        },
        button: {
            margin: "5%",
            marginBottom: 20,
            border: "1px solid purple"
        },
        activeButton: {
            margin: "5%",
            marginBottom: 20,
            backgroundColor: "purple",
            color: "white"

        },
        submit: { 
            // position: "absolute", 
            // bottom: (!isDesktop) ? "40%" : "10%",
            color: "white",
            backgroundColor: "purple",
            marginTop: 20
        },
        next: { 
            // position: "absolute", 
            // bottom: (!isDesktop) ? "40%" : "10%",
            color: "white",
            backgroundColor: "#d9b3ff",
            marginTop: 20
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
        smallInputErr: {
            width: (!isDesktop) ? 200: 350,
            border: "1px solid red"
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
                <AnswerContact 
                handleAnswer={handleAllAnswers}
                error={errValidation}
                answer={answer}/>
            )
        case 2:
            return (
                <AnswerFirstBirth 
                handleAnswer={handleAllAnswers} 
                error={errValidation}
                answer={answer}/>

            )
        case 3:
            return (
                <AnswerDueDate 
                handleAnswer={handleAllAnswers}
                answer={answer}/>
            )
        case 4:
            return (<>
                <textarea style={style.largeInput} value={answer.why} onChange={handleAnswerWhy}></textarea>
            </>)
        case 5:
            return (<>
                <textarea style={style.largeInput} value={answer.envision} onChange={handleAnswerEnvision}></textarea>
            </>)
        
        case 6:
            return (<>
                <textarea style={style.largeInput} value={answer.midwifery} onChange={handleAnswerMidwifery}></textarea>
            </>)
        case 7:
            return (<>
                <textarea style={style.largeInput} value={answer.concerns} onChange={handleAnswerConcerns}></textarea>
            </>)
        case 8:
            return (<>
                <input style={style.smallInput} value={answer.refer} onChange={handleAnswerRefer} />
            </>)
        case 9: 
            return (
                <AnswerSelectDays 
                checkSunday={checkSunday}
                checkMonday={checkMonday}
                checkTuesday={checkTuesday}
                checkWednesday={checkWednesday}
                checkThursday={checkThursday}
                checkFriday={checkFriday}
                checkSaturday={checkSaturday}
                selectDays={answer.selectDays}/>
            )
        case 10:
            return (
                <AnswerSelectTime 
                checkMorning={checkMorning}
                checkAfternoon={checkAfternoon}
                checkEvening={checkEvening}
                selectTime={answer.selectTime}/>
            )
        case 11:
            return (<>
                <div style={{ paddingTop: (!isDesktop) ? 40 : 40}}>
                    <Button onClick={(e, value) => handleConsultPreference(e, "In Person")} style={(answer.consultPreference === "In Person") ? style.activeButton : style.button}>In Person</Button>
                    <Button onClick={(e, value) => handleConsultPreference(e, "Phone")} style={(answer.consultPreference === "Phone") ? style.activeButton : style.button}>Phone</Button>
                </div>
            </>)
        case 12:
            return (
                <>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                            <Typography style={style.answerTextBold}> Name: </Typography>
                            <Typography style={style.answerText}>{answer.name}</Typography>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                            <Typography style={style.answerTextBold}> Email: </Typography>
                            <Typography style={style.answerText}>{answer.email}</Typography>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                            <Typography style={style.answerTextBold}> Phone: </Typography>
                            <Typography style={style.answerText}>{answer.phone}</Typography>
                    </Grid>
                    
                </>
            )
        default:
            return (
                <>
                    <AnswerName 
                    handleAnswer={handleAllAnswers}
                    error={errValidation}
                    answer={answer}/>
                </>
            )
        }
    }
    
    return (
        <div>
            <Grid container direction="row" alignItems="center" justifyContent="center"  style={{ paddingLeft: 0, paddingRight: (!isDesktop) ? "4%" : 0 }}>
                <Grid container direction="row" justifyContent="left">
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
                            : <Button onClick={nextQuestion} style={style.next}>Next</Button>}
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