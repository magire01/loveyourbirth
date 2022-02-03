import React, { useState, useEffect } from "react";
import '@fontsource/roboto';

const AnswerConcerns= (props) => {

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
        largeInput: {
            width: (!isDesktop) ? "90%": 500,
            height: (!isDesktop) ? "60%": 200,
            margin: (!isDesktop) ? "5%": "5%"
        }
    }
    
    return (
        <>
            <textarea style={style.largeInput} value={props.answer.concerns} onChange={(e, question, value) => props.handleAnswer(e, "concerns", e.target.value)}></textarea>
        </>
    )
}

export default AnswerConcerns;