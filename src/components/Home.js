import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, CardMedia } from "@material-ui/core";
import '@fontsource/roboto';
import MidwifePic from "../midwife1.png";
import FavoriteIcon from '@material-ui/icons/Favorite';
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
        quoteFont: {
            color: "black",
            fontSize: (!isDesktop) ? 12 : 20,
            textAlign: "center",
            fontStyle: "italic",
            marginTop: 20,
            marginRight: (!isDesktop) ? "10%" : "20%",
            marginLeft: (!isDesktop) ? "10%" : "20%"
        },
        quoteFont2: {
            color: "black",
            fontSize: (!isDesktop) ? 12 : 20,
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 20,
            marginTop: (!isDesktop) ? 10 : 15
        },
        missionFont: {
            fontSize: (!isDesktop) ? 14 : 20,
            textAlign: "center",
            marginTop: 20,
            marginRight: (!isDesktop) ? 40 : 60,
            marginLeft: (!isDesktop) ? 40 : 60
        },
        title: {
            fontSize: (!isDesktop) ? 25 : 35,
            marginBottom: "5%",
            color: "black"
        },
        picture2: {
            width: (!isDesktop) ? 300 : "40%",
            height: "auto",
            textAlign: "left",
            marginTop: 50
        },
        card: {
            backgroundColor: "#A9D1EA",
            marginBottom: 5,
            marginTop: 5,
            paddingRight: 0
        },
        section: {
            marginTop: 30,
            marginBottom: 50
        },
        heart: {
            color: "#ff3399",
            fontSize: 30,
            marginBottom: 20,
            marginTop: 0
        }
    }
    return (
        <Grid container direction="row" alignItems="center" justifyContent="center">
                    <Grid item md="12" xs="12">
                        <Typography style={style.quoteFont}>You are a midwife, assisting at someone else’s birth. Do good without show or fuss. Facilitate what is happening rather than what you think ought to be happening. If you must take the lead, lead so that the mother is helped, yet still free and in charge. When the baby is born, the mother will rightly say, 'We did it ourselves!'</Typography>
                        <Typography style={style.quoteFont2}>Tao Te Ching</Typography>
                    </Grid>
                    <Grid item md="12" xs="12">
          <FavoriteIcon style={style.heart} />
        </Grid>
            <Paper style={style.card} elevation="3">
                <Grid item md="12" xs="12">
                    <CardMedia>
                        <img src={MidwifePic} style={style.picture2}/>
                    </CardMedia>
                </Grid>
                <Grid item md="12" xs="12" style={style.section}>
                    <Typography style={style.missionFont}>My mission is to support physiologic pregnancy and birth by providing safe and evidence-based midwifery care in the home setting. Pregnancy and birth bring forth sacred and beautiful physiologic moments for which should be protected through physical and emotional support. We will work together through informed consent and shared decision making so you can feel confident in the decisions about your pregnancy and birth. My hope is for you to feel supported, empowered, and to ultimately love your birth experience.</Typography>
                </Grid>
            </Paper>   
        </Grid>
    )
}

export default Home;