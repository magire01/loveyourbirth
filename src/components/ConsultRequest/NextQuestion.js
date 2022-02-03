import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import '@fontsource/roboto';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import QuestionData from "../../utilities/questions.json";

const NextQuestion = (props) => {

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
        {(props.questionNum === QuestionData.data.length - 1) 
            ? <IconButton>
                <ArrowForwardIcon style={style.nextButtonDisabled}/>
            </IconButton>
            : <IconButton onClick={props.nextQuestion}>
                <ArrowForwardIcon style={style.nextButtonActive}/>
            </IconButton>}
        </>
    )
}

export default NextQuestion;