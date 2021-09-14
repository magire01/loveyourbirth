import React, { useState } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Card, CardMedia } from "@material-ui/core";

import '@fontsource/roboto';

import ProfilePic from "../krystal.png";
import MidwifePic from "../midwife1.png";

const About = () => {

    const style = {
        font: {
            color: "#454545",
            margin: 20,
            fontSize: 25
        },
        font2: {
            color: "#630070",
            margin: 20,
            fontSize: 18,

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
            width: "80%",
            height: "auto",
            marginTop: 80,
            borderRadius: 180,
            border: "3px solid #F6CBFF"
        },
        picture2: {
            width: "40%",
            height: "auto"
        },
        title: {
            marginBottom: "5%",
            color: "#454545"
        },
        section: {
            marginTop: "5%"
        },
        card: {
            padding: 50,
            backgroundColor: "#FFCFED",
            marginBottom: 20
        },
        card2: {
            padding: 10,
            margin: 15
        }
    }
    return (
        <Grid container direction="row">
            <Grid item md="12" xs="12">
                <Card style={style.card}>
                    <Typography variant="h4" style={style.title}>Krystal Smith, MSN, APRN, CNM</Typography>
                    <CardMedia>
                        <img src={MidwifePic} style={style.picture2}/>
                    </CardMedia>
                    <Typography style={style.font}>My mission is to support physiologic pregnancy and birth by providing safe and evidence-based midwifery care in the home setting.</Typography> 
                    <Typography style={style.font}>Pregnancy and birth bring forth sacred and beautiful physiologic moments for which should be protected through physical and emotional support.</Typography>
                    <Typography style={style.font}>We will work together through informed consent and shared decision making so you can feel confident in the decisions about your pregnancy and birth.</Typography> 
                    <Typography style={style.font}>My hope is for you to feel supported, empowered, and to ultimately love your birth experience.</Typography>
                </Card>
                
            </Grid>
            
            <Grid item md="12" xs="12">
                </Grid>
            <Grid item md="6" xs="12" style={style.section}>
                <img src={ProfilePic} style={style.picture}/>
            </Grid>
            {/* <Grid item md="6" xs="12" style={style.section}>
                <Typography variant="h6" style={style.font}>What Care Is Provided?</Typography>
                <Typography style={style.font}>-Antenatal home visits</Typography>
                <Typography style={style.font}>Labor and birth care in the home</Typography>
                <Typography style={style.font}>Postpartum care home visits</Typography>
                <Typography style={style.font}>Newborn care home visits up to 28 days of life</Typography>
            </Grid> */}
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