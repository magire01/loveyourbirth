import React, { useState, useEffect } from "react";
import { Grid, IconButton, LinearProgress, Modal, Card } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import QuestionData from "../../utilities/questions.json";
import emailjs from 'emailjs-com';
import '@fontsource/roboto';

import HandleQuestion from "./HandleQuestion";
import HandleAnswer from "./HandleAnswer";
import PrevQuestion from "./PrevQuestion";
import NextQuestion from "./NextQuestion";
import SubmitConsult from "./SubmitConsult";

const ConsultFormMain = (props) => {
    //Nav Rendering for Smartphone vs Laptop
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
//Questions
    //question number
    const [questionNum, setQuestionNum] = useState(0)
    //error validation
    const [errValidation, setErrValidation] = useState({
        name: false,
        city: false,
        email: false,
        phone: false
    })
    //progress bar
    const point = 100/QuestionData.data.length
    const [progress, setProgress] = useState(point)

    //next question button
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
    //prev question button
    const prevQuestion = (e) => {
        e.preventDefault();
        setQuestionNum(questionNum - 1)
        setProgress(progress - point)
    }
//Answers
    //Handle All Answers (Except check box questions)
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

    //Checkbox - Select Days
    const checkSunday = () => {
        if(!answer.selectDays.sunday) {
            setAnswer({ ...answer, selectDays:{ ...answer.selectDays, sunday: true } })
        } else {
            setAnswer({ ...answer, selectDays: { ...answer.selectDays, sunday: false } })
        }
    } 
    const checkMonday = () => {
        if(!answer.selectDays.monday) {
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

    //Answer Object
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
        preference: ""
    })

    //Email JS
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
    //Resets Form on close
    useEffect(() => {
        setAnswer({
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
        preference: ""
        })
        setQuestionNum(0)
        setProgress(point);
    }, [props.openForm]);
    
//Style
    const style = {
        questionSectionMain: {
            height: (!isDesktop) ? 400 : 400,
            marginBottom: "3%",
            paddingLeft: (!isDesktop) ? 10: 0
        },
        progress: {
            marginLeft: "3%",
            marginRight: "3%",
            width: "100%"
        },
        contactCard: {
            display: 'fixed',  
            justifyContent:'center', 
            alignItems:'center',
            height: (!isDesktop) ? "80%" : "80%",
            width: (!isDesktop) ? "96%" : "auto",
            margin: (!isDesktop) ? "0.5%" : 100,
            marginTop: (!isDesktop) ? 0 : 100,
            textAlign: "center",
            border: "5px solid purple",
            overflowY: "auto"
          }
    }

    return (
        <Modal
        open={props.openForm}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
            <Card style={style.contactCard}>
                <Grid container direction="row" alignItems="center" justifyContent="center"  style={{ paddingLeft: 0, paddingRight: (!isDesktop) ? "4%" : 0 }}>
                    <Grid container direction="row" justifyContent="left">
{/* Close Button */}
                        <IconButton>
                            <CloseIcon onClick={props.closeForm} />
                        </IconButton>
{/* Progress Bar */}
                        <LinearProgress variant="determinate" value={progress} style={style.progress} />
                    </Grid>
{/* PrevQuestion */}
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item md="1" xs="1">
                            <PrevQuestion 
                            questionNum={questionNum}
                            prevQuestion={prevQuestion}/>
                        </Grid>
{/* Question and Answer */}
                        <Grid item md="10" xs="10" style={style.questionSectionMain}>
                            <HandleQuestion 
                            questionNum={questionNum}
                            />
                            <HandleAnswer 
                            questionNum={questionNum}
                            handleAnswer={handleAllAnswers}
                            error={errValidation}
                            answer={answer}
                            checkSunday={checkSunday}
                            checkMonday={checkMonday}
                            checkTuesday={checkTuesday}
                            checkWednesday={checkWednesday}
                            checkThursday={checkThursday}
                            checkFriday={checkFriday}
                            checkSaturday={checkSaturday}
                            selectDays={answer.selectDays}
                            checkMorning={checkMorning}
                            checkAfternoon={checkAfternoon}
                            checkEvening={checkEvening}
                            selectTime={answer.selectTime}
                            />
{/* Next and Submit Button */}
                            <Grid item md="12" xs="12">
                                <SubmitConsult 
                                questionNum={questionNum}
                                sendEmail={sendEmail}
                                nextQuestion={nextQuestion}/>
                            </Grid> 
                        </Grid>
{/* PrevQuestion */}
                        <Grid item md="1" xs="1">
                            <NextQuestion 
                            questionNum={questionNum}
                            nextQuestion={nextQuestion}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Modal>
    )
}

export default ConsultFormMain;