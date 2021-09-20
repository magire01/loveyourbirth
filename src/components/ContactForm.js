import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton, LinearProgress, Checkbox } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import QuestionData from "../utilities/questions.json";
import emailjs from 'emailjs-com';
import '@fontsource/roboto';
import { QuestionAnswerSharp } from "@material-ui/icons";

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
    //Checkbox
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const time = ["Morning", "Afternoon", "Evening"]
    const [selectDays, setSelectDays] = useState({
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false
        })
    const checkSunday = () => {
        if(!selectDays.sunday) {
            setSelectDays({ ...selectDays, sunday: true })
        } else {
            setSelectDays({ ...selectDays, sunday: false })
        }
    } 
    const checkMonday = () => {
        if(!selectDays.monday) {
            setSelectDays({ ...selectDays, monday: true })
        } else {
            setSelectDays({ ...selectDays, monday: false })
        }
    }
    const checkTuesday = () => {
        if(!selectDays.tuesday) {
            setSelectDays({ ...selectDays, tuesday: true })
        } else {
            setSelectDays({ ...selectDays, tuesday: false })
        }
    }
    const checkWednesday = () => {
        if(!selectDays.wednesday) {
            setSelectDays({ ...selectDays, wednesday: true })
        } else {
            setSelectDays({ ...selectDays, wednesday: false })
        }
    }
    const checkThursday = () => {
        if(!selectDays.thursday) {
            setSelectDays({ ...selectDays, thursday: true })
        } else {
            setSelectDays({ ...selectDays, thursday: false })
        }
    }
    const checkFriday = () => {
        if(!selectDays.friday) {
            setSelectDays({ ...selectDays, friday: true })
        } else {
            setSelectDays({ ...selectDays, friday: false })
        }
    }
    const checkSaturday = () => {
        if(!selectDays.saturday) {
            setSelectDays({ ...selectDays, saturday: true })
        } else {
            setSelectDays({ ...selectDays, saturday: false })
        }
    }

    const [selectTime, setSelectTime] = useState({
        morning: false,
        afternoon: false,
        evening: false
    })

    const checkMorning = () => {
        if(!selectTime.morning) {
            setSelectTime({ ...selectTime, morning: true})
        } else {
            setSelectTime({ ...selectTime, morning: false})
        }
    }
    const checkAfternoon = () => {
        if(!selectTime.afternoon) {
            setSelectTime({ ...selectTime, afternoon: true})
        } else {
            setSelectTime({ ...selectTime, afternoon: false})
        }
    }
    const checkEvening = () => {
        if(!selectTime.evening) {
            setSelectTime({ ...selectTime, evening: true})
        } else {
            setSelectTime({ ...selectTime, evening: false})
        }
    }
    
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
        refer: "",
        consultPreference: ""
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

    const handleConsultPreference = (e, selection) => {
        e.preventDefault();
        setAnswer({ ...answer, consultPreference: selection})
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
            refer: answer.refer,
            days: Object.keys(selectDays).filter(key => selectDays[key]),
            time: Object.keys(selectTime).filter(key => selectTime[key]),
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
        },
        checkbox: {
            fontSize: (!isDesktop) ? 15 : 20,
            alignText: "right"
        },
        checkitem: {
            fontSize: (!isDesktop) ? 15 : 20,
            alignText: "left"
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
                <div style={{ paddingTop: (!isDesktop) ? 40 : 40}}>
                    <Button onClick={(e, value) => handleAnswerFirstBirth(e, "Yes")} style={(answer.firstBirth === "Yes") ? style.activeButton : style.button}>Yes</Button>
                    <Button onClick={(e, value) => handleAnswerFirstBirth(e, "No")} style={(answer.firstBirth === "No") ? style.activeButton : style.button}>No</Button>
                </div>)
            case 3:
                return (<>
                    <textarea style={style.largeInput} value={answer.why} onChange={handleAnswerWhy}></textarea>
                </>)
            case 4:
                return (<>
                    <textarea style={style.largeInput} value={answer.envision} onChange={handleAnswerEnvision}></textarea>
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
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item md="6" xs="5">
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            >
                                <Checkbox {...label} 
                                onChange={checkSunday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Sunday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            >
                                <Checkbox {...label}
                                onChange={checkMonday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Monday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            >
                                <Checkbox {...label}
                                onChange={checkTuesday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Tuesday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            >
                                <Checkbox
                                onChange={checkWednesday} {...label} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Wednesday</Typography>
                            </Grid>
                        </Grid>
                        <Grid item md="6" xs="5">
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            >
                                <Checkbox {...label}
                                onChange={checkThursday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Thursday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            >
                                <Checkbox
                                onChange={checkFriday} {...label} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Friday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            >
                                <Checkbox
                                onChange={checkSaturday} {...label} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Saturday</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
            </>)
        case 9:
            return (<>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Checkbox {...label} 
                        onClick={checkMorning} icon={<FavoriteBorder  style={style.checkbox} />} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Morning</Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Checkbox {...label}
                        onClick={checkAfternoon} icon={<FavoriteBorder  style={style.checkbox} />} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Afternoon</Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Checkbox {...label} 
                        onClick={checkEvening} icon={<FavoriteBorder  style={style.checkbox} />} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Evening</Typography>
                </Grid>

            </>)
            case 10:
                return (<>
                    <div style={{ paddingTop: (!isDesktop) ? 40 : 40}}>
                        <Button onClick={(e, value) => handleConsultPreference(e, "In Person")} style={(answer.consultPreference === "In Person") ? style.activeButton : style.button}>In Person</Button>
                        <Button onClick={(e, value) => handleConsultPreference(e, "Phone")} style={(answer.consultPreference === "Phone") ? style.activeButton : style.button}>Phone</Button>
                    </div>
                </>)
            case 11:
                return (<>
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