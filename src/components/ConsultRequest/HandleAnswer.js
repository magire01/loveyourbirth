import React, { useState, useEffect } from "react";
import '@fontsource/roboto';

import AnswerName from "./Answers/AnswerName";
import AnswerContact from "./Answers/AnswerContact";
import AnswerFirstBirth from "./Answers/AnswerFIrstBirth";
import AnswerDueDate from "./Answers/AnswerDueDate";
import AnswerEnvision from "./Answers/AnswerEnvision";
import AnswerWhy from "./Answers/AnswerWhy";
import AnswerMidwifery from "./Answers/AnswerMidwifery";
import AnswerConcerns from "./Answers/AnswerConcerns";
import AnswerRefer from "./Answers/AnswerRefer";
import AnswerSelectDays from "./Answers/AnswerSelectDays";
import AnswerSelectTime from "./Answers/AnswerSelectTime";
import AnswerPreference from "./Answers/AnswerPreference";
import ConsultSummary from "./ConsultSummary";

const HandleAnswer = (props) => {

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
        answerSection: {
            height: (!isDesktop) ? 200: 300
        }
    }

    const handleAnswer = () => {
        switch(props.questionNum) {
        case 0:
            return (
                <AnswerName 
                handleAnswer={props.handleAnswer}
                error={props.error}
                answer={props.answer}/>
            )
        case 1:
            return (
                <AnswerContact 
                handleAnswer={props.handleAnswer}
                error={props.error}
                answer={props.answer}/>
            )
        case 2:
            return (
                <AnswerFirstBirth 
                handleAnswer={props.handleAnswer} 
                error={props.error}
                answer={props.answer}/>

            )
        case 3:
            return (
                <AnswerDueDate 
                handleAnswer={props.handleAnswer}
                answer={props.answer}/>
            )
        case 4:
            return (
                <AnswerWhy 
                handleAnswer={props.handleAnswer}
                answer={props.answer}/>
            )
        case 5:
            return (
                <AnswerEnvision 
                handleAnswer={props.handleAnswer}
                answer={props.answer}/>
            )
        
        case 6:
            return (
                <AnswerMidwifery 
                handleAnswer={props.handleAnswer}
                answer={props.answer}/>
            )
        case 7:
            return (
                <AnswerConcerns 
                handleAnswer={props.handleAnswer}
                answer={props.answer}/>
            )
        case 8:
            return (
                <AnswerRefer 
                handleAnswer={props.handleAnswer}
                answer={props.answer}/>
            )
        case 9: 
            return (
                <AnswerSelectDays 
                checkSunday={props.checkSunday}
                checkMonday={props.checkMonday}
                checkTuesday={props.checkTuesday}
                checkWednesday={props.checkWednesday}
                checkThursday={props.checkThursday}
                checkFriday={props.checkFriday}
                checkSaturday={props.checkSaturday}
                selectDays={props.answer.selectDays}/>
            )
        case 10:
            return (
                <AnswerSelectTime 
                checkMorning={props.checkMorning}
                checkAfternoon={props.checkAfternoon}
                checkEvening={props.checkEvening}
                selectTime={props.answer.selectTime}/>
            )
        case 11:
            return (
                <AnswerPreference 
                handleAnswer={props.handleAnswer}
                answer={props.answer}/>
            )
        default:
            return (
                <ConsultSummary
                answer={props.answer}/>
            )
        }
    }
    
    return (
        <div style={style.answerSection}>
            {handleAnswer()}
        </div>
    )
}

export default HandleAnswer;