import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Card, CardMedia } from "@material-ui/core";

import '@fontsource/roboto';

import ProfilePic from "../krystal.png";
import MidwifePic from "../midwife1.png";

const About = () => {

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
        font2: {
            color: "#0671B7",
            margin: 20,
            fontSize: 18
        },
        font3: {
            color: "#0671B7",
            fontSize: 30,
            borderBottom: "3px solid #67A3D9",
            borderRight: "3px solid #67A3D9",
            backgroundColor: "#F6D2E0",
            margin: 20,
            borderRadius: 5
        },
        picture: {
            width: "60%",
            height: "auto",
            marginTop: (!isDesktop) ? 20 : 100,
            borderRadius: 60,
            border: "5px solid #F6D2E0"
        },
        picture2: {
            width: (!isDesktop) ? "100%" : "30%",
            height: "auto"
        },
        title: {
            fontSize: (!isDesktop) ? 25 : 35,
            marginBottom: "5%",
            color: "#0671B7"
        },
        section: {
            marginTop: "0%"
        },
        card: {
            padding: 50,
            backgroundColor: "#FFCFED",
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
            {(!isDesktop)
                    ?
                    <>
                        <Typography variant="h4" style={style.title}>Krystal Smith,</Typography>
                        <Typography variant="h4" style={style.title}>MSN, APRN, CNM</Typography>
                    </>
                    : <Typography variant="h4" style={style.title}>Krystal Smith, MSN, APRN, CNM</Typography>
                        }
            </Grid>
            <Grid item md="6" xs="12" style={style.section}>
                <img src={ProfilePic} style={style.picture}/>
            </Grid>
            <Grid item md="6" xs="12" style={style.section}>
                <div style={style.card2}>
                    <Typography variant="h6" style={style.font3}>Experience</Typography>
                    <Typography style={style.font2}>Master’s degree in the Science of Nurse-Midwifery</Typography>
                    <Typography style={style.font2}>Registered Nurse in Labor &amp; Delivery and Postpartum for 5.5 years</Typography>
                    <Typography style={style.font2}>Midwifery Clinical experience in the home setting</Typography>
                    <Typography style={style.font2}>Neonatal resuscitation certified</Typography>
                    <Typography style={style.font2}>BLS CPR certified</Typography>
                </div>
                <div style={style.card2}>
                    <Typography variant="h6" style={style.font3}>Interests</Typography>
                    <Typography style={style.font2}>Supporting physiologic birth</Typography>
                    <Typography style={style.font2}>Breastfeeding</Typography>
                    <Typography style={style.font2}>Shared decision making</Typography>
                    <Typography style={style.font2}>Evidence-based care</Typography>
                    <Typography style={style.font2}>Informed consent</Typography>
                    <Typography style={style.font2}>Supporting women’s desires</Typography>
                    <Typography style={style.font2}>Family centered care</Typography>
                </div>
            </Grid>
            <Grid item md="6" xs="12" style={style.section}>
                
            </Grid>
        </Grid>
    )
}

export default About;