import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import '@fontsource/roboto';

const ConsultSummary = (props) => {

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
        answerTextBold: {
            marginTop: (!isDesktop) ? 10 : 20,
            marginBottom: (!isDesktop) ? 10 : 10,
            color: "purple",
            fontSize: (!isDesktop) ? 10 : 20,
        }
    }
    
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                    <Typography style={style.answerTextBold}> Name: </Typography>
                    <Typography style={style.answerText}>{props.answer.name}</Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                    <Typography style={style.answerTextBold}> Email: </Typography>
                    <Typography style={style.answerText}>{props.answer.email}</Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                    <Typography style={style.answerTextBold}> Phone: </Typography>
                    <Typography style={style.answerText}>{props.answer.phone}</Typography>
            </Grid>
            
        </>
    )
}

export default ConsultSummary;