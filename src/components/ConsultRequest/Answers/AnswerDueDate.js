import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import '@fontsource/roboto';

const AnswerDueDate = (props) => {

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

        },
        monthButton: {
            border: "1px solid purple",
            margin: (!isDesktop) ? 5 : "1%",
            width: (!isDesktop) ? 30 : 150,
            height: (!isDesktop) ? 10 : 40,
            fontSize: (!isDesktop) ? 8 : 20,
        },
        activeMonthButton: {
            backgroundColor: "purple",
            border: "1px solid purple",
            margin: (!isDesktop) ? 5 : "1%",
            color: "white",
            width: (!isDesktop) ? 30 : 150,
            height: (!isDesktop) ? 10 : 40,
            fontSize: (!isDesktop) ? 8 : 20
        },
        idkButton: {
            border: "1px solid purple",
            margin: (!isDesktop) ? 5 : "1%",
            width: (!isDesktop) ? 100 : 250,
            height: (!isDesktop) ? 10 : 40,
            fontSize: (!isDesktop) ? 8 : 20,
        },
        activeIdkButton: {
            backgroundColor: "purple",
            border: "1px solid purple",
            margin: (!isDesktop) ? 5 : "1%",
            color: "white",
            width: (!isDesktop) ? 100 : 250,
            height: (!isDesktop) ? 10 : 40,
            fontSize: (!isDesktop) ? 8 : 20
        }
    }
    
    return (
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            <Grid item md="12">
                <Button 
                onClick={(e, value) => props.changeMonth(e, "January")} 
                style={(props.answer.dueDate != "January") ? style.monthButton : style.activeMonthButton}>January</Button>
                <Button 
                onClick={(e, value) => props.changeMonth(e, "February")} 
                style={(props.answer.dueDate != "February") ? style.monthButton : style.activeMonthButton}>February</Button>
                <Button 
                onClick={(e, value) => props.changeMonth(e, "March")} 
                style={(props.answer.dueDate != "March") ? style.monthButton : style.activeMonthButton}>March</Button>     
            </Grid>
            <Grid item md="12">
                <Button 
                onClick={(e, value) => props.changeMonth(e, "April")} 
                style={(props.answer.dueDate != "April") ? style.monthButton : style.activeMonthButton}>April</Button>
                <Button 
                onClick={(e, value) => props.changeMonth(e, "May")} 
                style={(props.answer.dueDate != "May") ? style.monthButton : style.activeMonthButton}>May</Button>
                <Button 
                onClick={(e, value) => props.changeMonth(e, "June")} 
                style={(props.answer.dueDate != "June") ? style.monthButton : style.activeMonthButton}>June</Button> 
            </Grid>
            <Grid item md="12">
                <Button 
                onClick={(e, value) => props.changeMonth(e, "July")} 
                style={(props.answer.dueDate != "July") ? style.monthButton : style.activeMonthButton}>July</Button>
                <Button 
                onClick={(e, value) => props.changeMonth(e, "August")} 
                style={(props.answer.dueDate != "August") ? style.monthButton : style.activeMonthButton}>August</Button>
                <Button 
                onClick={(e, value) => props.changeMonth(e, "September")} 
                style={(props.answer.dueDate != "September") ? style.monthButton : style.activeMonthButton}>September</Button>
            </Grid>
            <Grid item md="12">
                <Button 
                onClick={(e, value) => props.changeMonth(e, "October")} 
                style={(props.answer.dueDate != "October") ? style.monthButton : style.activeMonthButton}>October</Button>
                <Button 
                onClick={(e, value) => props.changeMonth(e, "November")} 
                style={(props.answer.dueDate != "November") ? style.monthButton : style.activeMonthButton}>November</Button>
                <Button 
                onClick={(e, value) => props.changeMonth(e, "December")} 
                style={(props.answer.dueDate != "December") ? style.monthButton : style.activeMonthButton}>December</Button>
            </Grid>
            <Grid item md="12">
                <Button 
                onClick={(e, value) => props.changeMonth(e, "I Don't Know")} 
                style={(props.answer.dueDate != "I Don't Know") ? style.idkButton : style.activeIdkButton}>I Don't Know</Button>
            </Grid>
        </Grid>
    )
}

export default AnswerDueDate;