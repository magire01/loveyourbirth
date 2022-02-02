import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import '@fontsource/roboto';

const AnswerPreference = (props) => {

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
            <div style={{ paddingTop: (!isDesktop) ? 40 : 40}}>
                <Button onClick={(e, question, value) => props.handleAnswer(e, "preference", "In Person")} style={(props.answer.preference === "In Person") ? style.activeButton : style.button}>In Person</Button>
                <Button onClick={(e, question, value) => props.handleAnswer(e, "preference", "Phone")} style={(props.answer.preference === "Phone") ? style.activeButton : style.button}>Phone</Button>
            </div>
        </>
    )
}

export default AnswerPreference;