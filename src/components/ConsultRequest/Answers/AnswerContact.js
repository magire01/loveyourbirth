import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import '@fontsource/roboto';

const AnswerContact = (props) => {

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
            <Typography style={(!props.error.email) ? style.answerText : style.answerTextErr}>{(!props.error.email) ? "Email" : "*Email"}</Typography> 
            <input style={(!props.error.email) ? style.smallInput : style.smallInputErr} value={props.answer.email} onChange={props.email} />
            <Typography style={(!props.error.phone) ? style.answerText : style.answerTextErr}>{(!props.error.phone) ? "Phone" : "*Phone"}</Typography> 
            <input style={(!props.error.phone) ? style.smallInput : style.smallInputErr} value={props.answer.email} value={props.answer.phone} onChange={props.phone} />  
            <Typography style={style.answerText}>Preferred Method of Contact</Typography> 
            <Button onClick={(e, value) => props.contactPref(e, "Email")} style={(props.answer.contact === "Email") ? style.activeButton : style.button}>Email</Button>
            <Button onClick={(e, value) => props.contactPref(e, "Phone")} style={(props.answer.contact === "Phone") ? style.activeButton : style.button}>Phone</Button>
        </>
    )
}

export default AnswerContact;