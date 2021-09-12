import React, { useState } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Card } from "@material-ui/core";

import QuestionData from "../utilities/questions.json";

import '@fontsource/roboto';

const ContactForm = () => {

    const style = {
        card: {
            display: 'absolute',  
            justifyContent:'center', 
            alignItems:'center',
            height: 400,
            width: "auto",
            margin: 100,
            textAlign: "center"
        },
        title: {
            marginTop: 20,
            marginBottom: 20
        },
        question: {
            marginTop: 20,
            marginBottom: 20
        },
        input: {
            marginTop: 20,
            marginBottom: 20
        },
        button: {
            marginTop: 20,
            marginBottom: 20
        }
    }

    const [questionNum, setQuestionNum] = useState(0)

    const nextQuestion = (e) => {
        e.preventDefault();
        setQuestionNum(questionNum + 1)
    }

    const prevQuestion = (e) => {
        e.preventDefault();
        setQuestionNum(questionNum - 1)
    }
    
    return (
        <>
            <Card style={style.card}>
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    <Grid item md="12" xs="12">
                        <Typography style={style.title}>Please answer the following questions</Typography>
                    </Grid>
                    <Grid item md="1" xs="1">
                        <button onClick={prevQuestion}> - </button>
                    </Grid>
                    <Grid item md="10" xs="10">
                        <Typography style={style.question}>{QuestionData.data[questionNum].question}</Typography>
                        <input style={style.input}/>
                    </Grid>
                    <Grid item md="1" xs="1">
                        <button onClick={nextQuestion}> + </button>
                    </Grid>
                    <Grid item md="12" xs="12">
                        <Button onClick={nextQuestion} style={style.button}>Submit</Button>
                    </Grid>        
                </Grid>
            </Card>
        </>
    )
}

export default ContactForm;