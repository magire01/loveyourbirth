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
        font: {
            color: "black",
            margin: (!isDesktop) ? 3 : 20,
            fontSize: (!isDesktop) ? 20 : 25
        },
        title: {
            fontSize: (!isDesktop) ? 25 : 35,
            marginBottom: "5%",
            color: "black"
        },
        picture2: {
            width: (!isDesktop) ? "100%" : "30%",
            height: "auto"
        },
        card: {
            padding: (!isDesktop) ? 20 : 40,
            backgroundColor: "#E1F0FA",
            marginBottom: 5,
            marginTop: 5
        }
    }
    return (
        <Grid container direction="row">
            <Grid item md="12" xs="12">
                <Paper style={style.card} elevation="3">
                     <Typography style={style.font}>“You are a midwife, assisting at someone else’s birth. Do good without show or fuss. Facilitate what is happening rather than what you think ought to be happening. If you must take the lead, lead so that the mother is helped, yet still free and in charge. When the baby is born, the mother will rightly say, “We did it ourselves!”</Typography>
                    <Typography style={style.font}>-Tao Te Ching</Typography>
                    <CardMedia>
                        <img src={MidwifePic} style={style.picture2}/>
                    </CardMedia>
                    <Typography style={style.font}>My mission is to support physiologic pregnancy and birth by providing safe and evidence-based midwifery care in the home setting. Pregnancy and birth bring forth sacred and beautiful physiologic moments for which should be protected through physical and emotional support. We will work together through informed consent and shared decision making so you can feel confident in the decisions about your pregnancy and birth. My hope is for you to feel supported, empowered, and to ultimately love your birth experience.</Typography>
                   
                </Paper>   
            </Grid>
        </Grid>
    )
}

export default Home;