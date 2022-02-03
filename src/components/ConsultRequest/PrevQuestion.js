import React, { useState, useEffect } from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import '@fontsource/roboto';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import QuestionData from "../../utilities/questions.json";

const PrevQuestion = (props) => {

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
        nextButtonActive: {
            color: "blue"
        },
        nextButtonDisabled: {
            color: "white"
        }
    }
    
    return (
        <>
        {(props.questionNum === 0) 
            ? <IconButton> 
                <ArrowBackIcon style={style.nextButtonDisabled}/>
            </IconButton>
            : <IconButton onClick={props.prevQuestion}> 
                <ArrowBackIcon style={style.nextButtonActive} />
             </IconButton>}
        </>
    )
}

export default PrevQuestion;