import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton, LinearProgress, Checkbox } from "@material-ui/core";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import '@fontsource/roboto';

const AnswerSelectDays = (props) => {

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
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Grid item md="6" xs="5">
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={props.checkSunday}
                    >
                        <Checkbox {...label} 
                        checked={props.selectDays.sunday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Sunday</Typography>
                    </Grid>
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={props.checkMonday} 
                    >
                        <Checkbox {...label}
                        checked={props.selectDays.monday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Monday</Typography>
                    </Grid>
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={props.checkTuesday} 
                    >
                        <Checkbox {...label}
                        checked={props.selectDays.tuesday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Tuesday</Typography>
                    </Grid>
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={props.checkWednesday} 
                    >
                        <Checkbox {...label}
                        checked={props.selectDays.wednesday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Wednesday</Typography>
                    </Grid>
                </Grid>
                <Grid item md="6" xs="5">
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={props.checkThursday} 
                    >
                        <Checkbox {...label}
                        checked={props.selectDays.thursday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Thursday</Typography>
                    </Grid>
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={props.checkFriday} 
                    >
                        <Checkbox {...label} 
                        checked={props.selectDays.friday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Friday</Typography>
                    </Grid>
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    onClick={props.checkSaturday} 
                    >
                        <Checkbox {...label}
                        checked={props.selectDays.saturday} icon={<FavoriteBorder  style={style.checkbox}/>} checkedIcon={<Favorite  style={style.checkbox}/>}/>
                        <Typography style={style.checkitem}>Saturday</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AnswerSelectDays;