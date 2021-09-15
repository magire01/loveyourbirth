import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Card, CardMedia } from "@material-ui/core";

import '@fontsource/roboto';

import ProfilePic from "../krystal.png";
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

    const style = {
        font: {
            color: "black",
            margin: (!isDesktop) ? 3 : 20,
            fontSize: (!isDesktop) ? 20 : 25
        },
        font2: {
            color: "#630070",
            margin: 20,
            fontSize: 18
        },
        font3: {
            color: "#630070",
            fontSize: 30,
            borderBottom: "3px solid #630070",
            borderRight: "3px solid #630070",
            backgroundColor: "lightpink",
            margin: 20,
            borderRadius: 5
        },
        picture: {
            width: "60%",
            height: "auto",
            marginTop: (!isDesktop) ? 20 : 100,
            borderRadius: 60,
            border: "5px solid #630070"
        },
        picture2: {
            width: (!isDesktop) ? "100%" : "30%",
            height: "auto"
        },
        title: {
            fontSize: (!isDesktop) ? 25 : 35,
            marginBottom: "5%",
            color: "black"
        },
        section: {
            marginTop: "5%"
        },
        card: {
            padding: 50,
            backgroundColor: "#C8E7F5",
            marginBottom: 20,
            borderRadius: 20
        },
        card2: {
            padding: 10,
            margin: 15
        }
    }
    return (
        <Grid container direction="row">
            <Grid item md="12" xs="12">
                <Card style={style.card} elevation="3">
                    
                    <Typography style={style.font}>My mission is to support physiologic pregnancy and birth by providing safe and evidence-based midwifery care in the home setting.</Typography> 
                    <Typography style={style.font}>Pregnancy and birth bring forth sacred and beautiful physiologic moments for which should be protected through physical and emotional support.</Typography>
                    <Typography style={style.font}>We will work together through informed consent and shared decision making so you can feel confident in the decisions about your pregnancy and birth.</Typography> 
                    <Typography style={style.font}>My hope is for you to feel supported, empowered, and to ultimately love your birth experience.</Typography>
                    <CardMedia>
                        <img src={MidwifePic} style={style.picture2}/>
                    </CardMedia>
                </Card>   
            </Grid>
        </Grid>
    )
}

export default Home;