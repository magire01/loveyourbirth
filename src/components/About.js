import React, { useState } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton } from "@material-ui/core";

import '@fontsource/roboto';

import ProfilePic from "../profilepic.png";

const About = () => {

    const style = {
        font: {
            color: "#454545"
        },
        picture: {
            width: "80%",
            height: "auto"
        },
        title: {
            marginBottom: "5%",
            color: "#454545"
        },
        section: {
            marginTop: "5%"
        }
    }
    return (
        <Grid container direction="row">
            <Grid item md="12" xs="12">
                <Typography variant="h5" style={style.title}>Krystal Smith, MSN, APRN, CNM</Typography>
            </Grid>
            
            <Grid item md="12" xs="12">
                <Typography style={style.font}>My mission is to support physiologic pregnancy and birth by providing safe and evidence-based midwifery care in the home setting.</Typography> 
                <Typography style={style.font}>Pregnancy and birth bring forth sacred and beautiful physiologic moments for which should be protected through physical and emotional support.</Typography>
                <Typography style={style.font}>We will work together through informed consent and shared decision making so you can feel confident in the decisions about your pregnancy and birth.</Typography> 
                <Typography style={style.font}>My hope is for you to feel supported, empowered, and to ultimately love your birth experience.</Typography>
            </Grid>
            <Grid item md="6" xs="12" style={style.section}>
                <img src={ProfilePic} style={style.picture}/>
            </Grid>
            <Grid item md="6" xs="12" style={style.section}>
                <Typography variant="h6" style={style.font}>What Care Is Provided?</Typography>
                <Typography style={style.font}>-Antenatal home visits</Typography>
                <Typography style={style.font}>Labor and birth care in the home</Typography>
                <Typography style={style.font}>Postpartum care home visits</Typography>
                <Typography style={style.font}>Newborn care home visits up to 28 days of life</Typography>
            </Grid>
            <Grid item md="6" xs="12" style={style.section}>
                <Typography variant="h6" style={style.font}>Experience</Typography>
                <Typography style={style.font}>Master’s degree in the Science of Nurse-Midwifery</Typography>
                <Typography style={style.font}>Registered Nurse in Labor &amp; Delivery and Postpartum for 5.5 years</Typography>
                <Typography style={style.font}>Midwifery Clinical experience in the home setting</Typography>
                <Typography style={style.font}>Neonatal resuscitation certified</Typography>
                <Typography style={style.font}>BLS CPR certified</Typography>
            </Grid>
            <Grid item md="6" xs="12" style={style.section}>
                <Typography variant="h6" style={style.font}>Interest</Typography>
                <Typography style={style.font}>Supporting physiologic birth</Typography>
                <Typography style={style.font}>Breastfeeding</Typography>
                <Typography style={style.font}>Shared decision making</Typography>
                <Typography style={style.font}>Evidence-based care</Typography>
                <Typography style={style.font}>Informed consent</Typography>
                <Typography style={style.font}>Supporting women’s desires</Typography>
                <Typography style={style.font}>Family centered care</Typography>
            </Grid>
        </Grid>
    )
}

export default About;