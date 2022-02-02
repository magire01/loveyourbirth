import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton, LinearProgress, Checkbox } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import QuestionData from "../../utilities/questions.json";
import emailjs from 'emailjs-com';
import '@fontsource/roboto';
import { Email, QuestionAnswerSharp } from "@material-ui/icons";

import AnswerContact from "./Answers/AnswerContact";
import AnswerName from "./Answers/AnswerName";

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
    //Month Selector
    const [selectMonth, setSelectMonth] = useState("empty");

    const selectDueDateMonth = (e, value) => {
        e.preventDefault();
        setSelectMonth(value);
        handleDueDate(e, value);
    }
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
    const handleDueDate = (e, value) => {
        e.preventDefault();
        setAnswer({ ...answer, dueDate: value })
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
        },
        checkbox: {
            fontSize: (!isDesktop) ? 15 : 20,
            alignText: "right"
        },
        checkitem: {
            fontSize: (!isDesktop) ? 15 : 20,
            alignText: "left"
        },
        monthButton: {
            border: "1px solid purple",
            margin: (!isDesktop) ? 5 : "1%",
            width: (!isDesktop) ? 30 : 150,
            height: (!isDesktop) ? 10 : 40,
            fontSize: (!isDesktop) ? 8 : 20,
        },
        activeMonthButton: {
            backgroundColor: "purple",
            border: "1px solid purple",
            margin: (!isDesktop) ? 5 : "1%",
            color: "white",
            width: (!isDesktop) ? 30 : 150,
            height: (!isDesktop) ? 10 : 40,
            fontSize: (!isDesktop) ? 8 : 20
        },
        idkButton: {
            border: "1px solid purple",
            margin: (!isDesktop) ? 5 : "1%",
            width: (!isDesktop) ? 100 : 250,
            height: (!isDesktop) ? 10 : 40,
            fontSize: (!isDesktop) ? 8 : 20,
        },
        activeIdkButton: {
            backgroundColor: "purple",
            border: "1px solid purple",
            margin: (!isDesktop) ? 5 : "1%",
            color: "white",
            width: (!isDesktop) ? 100 : 250,
            height: (!isDesktop) ? 10 : 40,
            fontSize: (!isDesktop) ? 8 : 20
        }
    }

    const handleAnswer = () => {
        switch(questionNum) {
            case 1:
                return (
                <AnswerContact 
                email={handleAnswerEmail} 
                phone={handleAnswerPhone} 
                contactPref={handleAnswerContactPref} 
                error={errValidation}
                answer={answer}/>
                )
            case 2:
                return (
                <div style={{ paddingTop: (!isDesktop) ? 40 : 40}}>
                    <Button onClick={(e, value) => handleAnswerFirstBirth(e, "Yes")} style={(answer.firstBirth === "Yes") ? style.activeButton : style.button}>Yes</Button>
                    <Button onClick={(e, value) => handleAnswerFirstBirth(e, "No")} style={(answer.firstBirth === "No") ? style.activeButton : style.button}>No</Button>
                </div>)
            case 3:
                return (
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Grid item md="12">
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "January")} 
                            style={(selectMonth != "January") ? style.monthButton : style.activeMonthButton}>January</Button>
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "February")} 
                            style={(selectMonth != "February") ? style.monthButton : style.activeMonthButton}>February</Button>
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "March")} 
                            style={(selectMonth != "March") ? style.monthButton : style.activeMonthButton}>March</Button>
                            
                        </Grid>
                        <Grid item md="12">
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "April")} 
                            style={(selectMonth != "April") ? style.monthButton : style.activeMonthButton}>April</Button>
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "May")} 
                            style={(selectMonth != "May") ? style.monthButton : style.activeMonthButton}>May</Button>
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "June")} 
                            style={(selectMonth != "June") ? style.monthButton : style.activeMonthButton}>June</Button>

                            
                        </Grid>
                        <Grid item md="12">
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "July")} 
                            style={(selectMonth != "July") ? style.monthButton : style.activeMonthButton}>July</Button>
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "August")} 
                            style={(selectMonth != "August") ? style.monthButton : style.activeMonthButton}>August</Button>
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "September")} 
                            style={(selectMonth != "September") ? style.monthButton : style.activeMonthButton}>September</Button>
                            
                        </Grid>
                        <Grid item md="12">
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "October")} 
                            style={(selectMonth != "October") ? style.monthButton : style.activeMonthButton}>October</Button>
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "November")} 
                            style={(selectMonth != "November") ? style.monthButton : style.activeMonthButton}>November</Button>
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "December")} 
                            style={(selectMonth != "December") ? style.monthButton : style.activeMonthButton}>December</Button>
                        </Grid>
                        <Grid item md="12">
                            <Button 
                            onClick={(e, value) => selectDueDateMonth(e, "I Don't Know")} 
                            style={(selectMonth != "I Don't Know") ? style.idkButton : style.activeIdkButton}>I Don't Know</Button>
                        </Grid>
                        
                    </Grid>
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
                return (<>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item md="6" xs="5">
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            onClick={checkSunday}
                            >
                                <Checkbox {...label} 
                                checked={selectDays.sunday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Sunday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            onClick={checkMonday} 
                            >
                                <Checkbox {...label}
                                checked={selectDays.monday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Monday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            onClick={checkTuesday} 
                            >
                                <Checkbox {...label}
                                checked={selectDays.tuesday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Tuesday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            onClick={checkWednesday} 
                            >
                                <Checkbox {...label}
                                checked={selectDays.wednesday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Wednesday</Typography>
                            </Grid>
                        </Grid>
                        <Grid item md="6" xs="5">
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            onClick={checkThursday} 
                            >
                                <Checkbox {...label}
                                checked={selectDays.thursday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Thursday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            onClick={checkFriday} 
                            >
                                <Checkbox {...label} 
                                checked={selectDays.friday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Friday</Typography>
                            </Grid>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            onClick={checkSaturday} 
                            >
                                <Checkbox {...label}
                                checked={selectDays.saturday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                                <Typography style={style.checkitem}>Saturday</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
            </>)
        case 10:
            return (<>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={checkMorning}
                    >
                        <Checkbox {...label} 
                         checked={selectTime.morning} icon={<FavoriteBorder  style={style.checkbox} />} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Morning</Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={checkAfternoon}
                    >
                        <Checkbox {...label}
                         checked={selectTime.afternoon} icon={<FavoriteBorder  style={style.checkbox} />} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Afternoon</Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={checkEvening} 
                    >
                        <Checkbox {...label} 
                        checked={selectTime.evening} icon={<FavoriteBorder  style={style.checkbox} />} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Evening</Typography>
                </Grid>

            </>)
            case 11:
                return (<>
                    <div style={{ paddingTop: (!isDesktop) ? 40 : 40}}>
                        <Button onClick={(e, value) => handleConsultPreference(e, "In Person")} style={(answer.consultPreference === "In Person") ? style.activeButton : style.button}>In Person</Button>
                        <Button onClick={(e, value) => handleConsultPreference(e, "Phone")} style={(answer.consultPreference === "Phone") ? style.activeButton : style.button}>Phone</Button>
                    </div>
                </>)
            case 12:
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
                    <AnswerName 
                    name={handleAnswerName} 
                    city={handleAnswerCity}
                    error={errValidation}
                    answer={answer}/>
                </>)
            
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