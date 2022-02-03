import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import '@fontsource/roboto';


import QuestionData from "../../utilities/questions.json";

const SubmitConsult = (props) => {

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
        submit: {
            color: "white",
            backgroundColor: "purple",
            marginTop: 20
        },
        next: {
            color: "white",
            backgroundColor: "#d9b3ff",
            marginTop: 20
        },
    }
    
    return (
        <>
        {(props.questionNum === QuestionData.data.length - 1) 
            ? <Button onClick={props.sendEmail} style={style.submit}>Submit</Button> 
            : <Button onClick={props.nextQuestion} style={style.next}>Next</Button>}
        </>
    )
}

export default SubmitConsult;