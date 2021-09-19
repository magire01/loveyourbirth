import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, CardHeader, IconButton, Button } from "@material-ui/core";
import '@fontsource/roboto';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';

const Contact = (props) => {

    const [phoneState, setPhoneState] = useState(false)

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
        card: {
            marginTop: 0,
            marginBottom: 0,
            paddingTop: (!isDesktop) ? 0 : 20,
            paddingBottom: 40,
            backgroundColor: "#A9D1EA",
            color: "white",
            borderRadius: 5
        },
        emailSection: {
            marginTop: (!isDesktop) ? 50 : 20,
        },
        emailIcon: {
            color: "white",
            position: "flex",
            alignItems: "right",
        },
        facebookIcon: {
            color: "white",
            position: "flex",
            alignItems: "left",
        },
        phoneIcon: {
            color: "white",
            position: "flex",
            alignItems: "left",
        },
        subheader: {
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            fontStyle: "italic",
            marginBottom: 20
            // borderBottom: "1px solid #ff3399",
          },
          patientPortal: {
            color: "white",
            fontSize: (!isDesktop) ? 14 : 20,
            textDecoration: 'none',
            padding: (!isDesktop) ? 20 : 50,
            fontWeight: "bold"
          },
          patientConsult: {
            color: "white", 
            fontSize: (!isDesktop) ? 14 : 20, 
            background: "none", 
            border: "none", 
            paddingBottom: !(isDesktop) ? 50 : 15,
            fontWeight: "bold"
            
          }
    }
    return (
    <Paper style={style.card} elevation="5">
        <Grid container direction="row" alignItems="center" justifyContent="center">
            {(!isDesktop)
            ?
            <>
            <Grid item md="4" xs="12" style={style.emailSection}>
                <button style={style.patientConsult} onClick={props.openConsult}>Schedule a Free Consultation</button>
            </Grid>
            <Grid item md="4" xs="12">
                <a href="https://clientcareeast.net/Account/LogOn?ReturnUrl=%2f" target="_blank" style={style.patientPortal}> Patient Portal Login </a>
            </Grid>
            <Grid item md="12" xs="12" style={style.emailSection}>
                <Typography style={{ fontSize: (!isDesktop) ? 14 : 20, marginBottom: "5%" }}>loveyourbirthmidwifery@gmail.com</Typography>
            </Grid>
            <Grid item md="1" xs="4">
                <IconButton onClick={props.openMessage}>
                    <EmailIcon style={style.emailIcon}/>
                </IconButton>
            </Grid>
            <Grid item md="1" xs="4">
                <IconButton>
                    <FacebookIcon style={style.facebookIcon}/>
                </IconButton>
            </Grid>
            <Grid item md="1" xs="4">
                <IconButton onClick={() => setPhoneState(true)}>
                    <LocalPhoneIcon style={style.phoneIcon} />
                </IconButton>
                {(!phoneState) ? <Typography></Typography> : <Typography>(859) 620-2982</Typography>}
            </Grid>

            </>
            :
            <>
            <Grid item md="4" xs="12" style={style.emailSection}>
                <button style={style.patientConsult} onClick={props.openConsult}>Schedule a Free Consultation</button>
            </Grid>
            <Grid item md="1" xs="4">
                <IconButton onClick={props.openMessage}>
                    <EmailIcon style={style.emailIcon}/>
                </IconButton>
            </Grid>
            <Grid item md="1" xs="4">
                <IconButton>
                    <FacebookIcon  style={style.facebookIcon}/>
                </IconButton>
            </Grid>
            <Grid item md="1" xs="4">
                <IconButton onClick={() => setPhoneState(true)}>
                    <LocalPhoneIcon style={style.phoneIcon} />
                </IconButton>
                {(!phoneState) ? <Typography></Typography> : <Typography>(859) 620-2982</Typography>}
            </Grid>
            <Grid item md="4" xs="12">
                <a href="https://clientcareeast.net/Account/LogOn?ReturnUrl=%2f" target="_blank" style={style.patientPortal}> Patient Portal Login </a>
            </Grid>
            <Grid item md="12" xs="12" style={style.emailSection}>
                <Typography style={{ fontWeight: "bold" }}>loveyourbirthmidwifery@gmail.com</Typography>
            </Grid>
            </>}
            
        </Grid>
    </Paper>
    )
}

export default Contact;