import React, { useState, useEffect } from "react";
import { Grid, Typography, CardMedia, Paper } from "@material-ui/core";
import '@fontsource/roboto';
import ProfilePic from "../krystal3.png";

import FavoriteIcon from '@material-ui/icons/Favorite';

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
    
    //Style
    const style = {
        font2: {
            color: "#730099",
            margin: 20,
            fontSize: 18
        },
        font3: {
            color: "white",
            fontSize: 20,
            borderBottom: "3px solid #730099",
            borderRight: "3px solid #730099",
            backgroundColor: "#FDB7C2",
            margin: "auto",
            borderRadius: 5,
            width: "60%"
        },
        picture: {
            width: (!isDesktop) ? 200 : 250,
            height: "auto",
            marginTop: (!isDesktop) ? 0 : 10,
            marginBottom: (!isDesktop) ? 0 : 0,
            borderRadius: 60,
            border: "2px solid #730099"
        },
        picture2: {
            width: (!isDesktop) ? "100%" : "30%",
            height: "auto"
        },
        title: {
            fontSize: (!isDesktop) ? 20 : 20,
            color: "#730099",
            marginBottom: 10,
            fontWeight: "bold"
        },
        section: {
            marginTop: 0,
            height: (!isDesktop) ? "auto" : 700
        },
        card: {
            margin: 20,
            width: "auto%",
            height: "auto",
            marginBottom: 20,
            borderRadius: 20
        },
        card2: {
            marginBottom: 50
        },
        cardMessage: {
            display: 'fixed',  
            justifyContent:'center', 
            alignItems:'center',
            height: (!isDesktop) ? "60%" : "80%",
            width: (!isDesktop) ? "97%" : "auto",
            margin: (!isDesktop) ? 0 : 100,
            marginTop: (!isDesktop) ? 0 : 100,
            textAlign: "center",
            border: "5px solid pink",
            backgroundColor: "white"
        },
        subheader: {
            fontSize: 20,
            backgroundColor: "#d9b3ff",
            color: "white",
            fontWeight: "bold",
            fontStyle: "italic",
            marginTop: 10
            // borderBottom: "1px solid #ff3399",
            
        },
        heart: {
            color: "#ff3399",
            fontSize: 30,
            marginTop: 30,
            marginBottom: 20,
            textAlign: "center"
        },
    }
    return (
        <Grid container direction="row" alignItems="center">
            <Grid item md="6" xs="12" style={style.section}>
                
                <div style={style.card}>
                    <CardMedia>
                        <img src={ProfilePic} style={style.picture}/>
                    </CardMedia> 
                </div>{(!isDesktop)
                        ?
                        <>
                            <Typography variant="h4" style={style.title}>Krystal Smith, MSN, APRN, CNM</Typography>
                        </>
                        : <Typography variant="h4" style={style.title}>Krystal Smith, MSN, APRN, CNM</Typography>
                    }
            </Grid>
            <Grid item md="6" xs="12" style={style.section}>
                
                <div style={style.card2}>
                    <Typography style={style.font2}>I have always had a passion for pregnancy and birth, but particularly after the birth of my second child. Although I had a hospital birth, I had an experience with limited intervention and was able to truly listen to my body. After such an empowering experience of having an unmedicated birth, I envisioned myself providing similar opportunities to women. I live in Northern Kentucky with my two beautiful children. I enjoy playing piano, singing, kayaking, yoga, and being a mother. My dream is for everyone to have the birth experience they desire. I look forward to meeting you!</Typography>
                </div>
                <div style={style.card2}>
                    <Typography variant="h6" style={style.font3}>Experience</Typography>
                    <Typography style={style.font2}>Master’s Degree in the Science of Nurse-Midwifery (2021)</Typography>
                    <Typography style={style.font2}>Certified Nurse Midwife through AMCB (2021)</Typography>
                    <Typography style={style.font2}>APRN Kentucky License (2021)</Typography>
                    <Typography style={style.font2}>Registered Nurse in Labor &amp; Delivery and Postpartum (2016)</Typography>
                    <Typography style={style.font2}>Midwifery Clinical Experience in the Home Setting </Typography>
                    <Typography style={style.font2}>Neonatal Resuscitation Certified</Typography>
                    <Typography style={style.font2}>BLS CPR Certified</Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default About;