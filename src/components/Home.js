import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, CardMedia } from "@material-ui/core";
import '@fontsource/roboto';
import MidwifePic from "../midwife1.png";
const Home = () => {
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
        missionFont: {
            fontSize: (!isDesktop) ? 16 : 20,
            textAlign: "center",
            marginTop: 20,
            paddingRight: (!isDesktop) ? 5 : 60,
            paddingLeft: (!isDesktop) ? 5 : 60
        },
        picture: {
            width: (!isDesktop) ? 300 : 400,
            height: "auto"
        },
        card: {
            backgroundColor: "#A9D1EA",
            marginBottom: 10,
            padding: (!isDesktop) ? "40px 10px 40px 10px" : "40px 40px 40px 40px"
        }
    }
    return (
        <Grid item md="12" xs="12">
            <Paper style={style.card} elevation={3}>
                <CardMedia>
                    <img src={MidwifePic} style={style.picture}/>
                </CardMedia>
                <Typography style={style.missionFont}>My mission is to support physiologic pregnancy and birth by providing safe and evidence-based midwifery care in the home setting. Pregnancy and birth bring forth sacred and beautiful physiologic moments that should be protected through physical and emotional support. We will work together through informed consent and shared decision making so you can feel confident in the decisions about your pregnancy and birth. My hope is for you to feel supported, empowered, and to ultimately love your birth experience.</Typography>
            </Paper>
        </Grid>
    )
}

export default Home;