import React, { useState, useEffect } from "react";
import '@fontsource/roboto';

const AnswerRefer = (props) => {

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
        smallInput: {
            width: (!isDesktop) ? 200: 350, 
        }
    }
    
    return (
        <>
            <input style={style.smallInput} value={props.answer.refer} onChange={(e, question, value) => props.handleAnswer(e, "refer", e.target.value)}/>
        </>
    )
}

export default AnswerRefer;