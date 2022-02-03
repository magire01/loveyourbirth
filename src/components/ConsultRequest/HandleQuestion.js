import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import '@fontsource/roboto';
import QuestionData from "../../utilities/questions.json";

const HandleQuestion = (props) => {

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
        question: {
            height: (!isDesktop) ? 60 : 80,
            marginTop: 20,
            marginBottom: (!isDesktop) ? 15 : 10,
            color: "purple",
            fontSize: (!isDesktop) ? 15 : 30,
            fontWeight: "bold"
        }
    }
    
    return (
        <Typography style={style.question}>{QuestionData.data[props.questionNum].question}</Typography>
    )
}

export default HandleQuestion;