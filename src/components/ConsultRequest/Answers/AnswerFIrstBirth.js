import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import '@fontsource/roboto';

const AnswerFirstBirth = (props) => {

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
        <div style={{ paddingTop: (!isDesktop) ? 40 : 40}}>
            <Button onClick={(e, question, value) => props.handleAnswer(e, "firstBirth", "Yes")} style={(props.answer.firstBirth === "Yes") ? style.activeButton : style.button}>Yes</Button>
            <Button onClick={(e, question, value) => props.handleAnswer(e, "firstBirth", "No")} style={(props.answer.firstBirth === "No") ? style.activeButton : style.button}>No</Button>
        </div>
)
}

export default AnswerFirstBirth;