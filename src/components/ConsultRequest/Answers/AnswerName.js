import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import '@fontsource/roboto';

const AnswerName = (props) => {

    //Nav Rendering for Smartphone vs Laptop
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    //Style
    const style = {
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
        smallInput: {
            width: (!isDesktop) ? 200: 350, 
        },
        smallInputErr: {
            width: (!isDesktop) ? 200: 350,
            border: "1px solid red"
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

        }
    }
    
    return (
        <>
            <Typography style={(!props.error.name) ? style.answerText : style.answerTextErr}>{(!props.error.name) ? "Name" : "*Name"}</Typography> 
            <input style={(!props.error.name) ? style.smallInput : style.smallInputErr} value={props.answer.name} onChange={(e, question, value) => props.handleAnswer(e, "name", e.target.value )}/>
            <Typography style={(!props.error.city) ? style.answerText : style.answerTextErr}>{(!props.error.city) ? "City, State" : "*City, State"}</Typography> 
            <input style={(!props.error.city) ? style.smallInput : style.smallInputErr} value={props.answer.name} value={props.answer.city} onChange={(e, question, value) => props.handleAnswer(e, "city", e.target.value )} />
        </>
    )
}

export default AnswerName;