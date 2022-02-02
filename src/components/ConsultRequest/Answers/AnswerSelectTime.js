import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton, LinearProgress, Checkbox } from "@material-ui/core";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import '@fontsource/roboto';

const AnswerSelectTime = (props) => {

    //Nav Rendering for Smartphone vs Laptop
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
        checkbox: {
            fontSize: (!isDesktop) ? 15 : 20,
            alignText: "right"
        },
        checkitem: {
            fontSize: (!isDesktop) ? 15 : 20,
            alignText: "left"
        }
    }
    
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                onClick={props.checkMorning}
                >
                    <Checkbox {...label} 
                        checked={props.selectTime.morning} icon={<FavoriteBorder  style={style.checkbox} />} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                    <Typography style={style.checkitem}>Morning</Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                onClick={props.checkAfternoon}
                >
                    <Checkbox {...label}
                        checked={props.selectTime.afternoon} icon={<FavoriteBorder  style={style.checkbox} />} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                    <Typography style={style.checkitem}>Afternoon</Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                onClick={props.checkEvening} 
                >
                    <Checkbox {...label} 
                    checked={props.selectTime.evening} icon={<FavoriteBorder  style={style.checkbox} />} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                    <Typography style={style.checkitem}>Evening</Typography>
            </Grid>
        </>
    )
}

export default AnswerSelectTime;