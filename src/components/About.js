import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import '@fontsource/roboto';
import ProfilePic from "../krystal4.png";

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
        aboutFont: {
            color: "#730099",
            padding: (!isDesktop) ? "10px 10px 20px 10px" : "10px 40px 20px 40px",
            fontSize: 18,
            marginTop: 10
        },
        experienceFont: {
            color: "#730099",
            padding: (!isDesktop) ? "10px 10px 20px 10px" : "10px 0px 20px 0px",
            fontSize: 18
        },
        subTitle: {
            color: "white",
            fontSize: 20,
            borderBottom: "3px solid #730099",
            borderRight: "3px solid #730099",
            backgroundColor: "#FDB7C2",
            margin: "auto",
            marginBottom: 5,
            marginTop: 10,
            borderRadius: 5,
            width: 300
        },
        picture: {
            width: (!isDesktop) ? 200 : 300,
            height: "auto",
            marginTop: 30,
            marginBottom: (!isDesktop) ? 0 : 0,
            borderRadius: 40,
            border: "2px solid #730099"
        },
        title: {
            fontSize: (!isDesktop) ? 20 : 20,
            color: "#730099",
            margin: "10px 0px 10px 0px",
            fontWeight: "bold"
        },
        section: {
            padding: "20px 0px 50px 0px",
            height: "auto"
        }
    }
    return (
        <Grid container direction="row" alignItems="flex-start" justifyContent="center" style={{ height: "auto"}}>
            <Grid item md="4" xs="12">
                <img src={ProfilePic} style={style.picture}/>
                <Typography variant="h4" style={style.title}>Krystal Smith, MSN, APRN, CNM</Typography>
            </Grid>
            <Grid item md="8" xs="12">
                <Typography style={style.aboutFont}>I have always had a passion for pregnancy and birth, but particularly after the birth of my second child. Although I had a hospital birth, I had an experience with limited intervention and was able to truly listen to my body. After such an empowering experience of having an unmedicated birth, I envisioned myself providing similar opportunities to women. I live in Northern Kentucky with my two beautiful children. I enjoy playing piano, singing, kayaking, yoga, and being a mother. My dream is for everyone to have the birth experience they desire. I look forward to meeting you!</Typography>
                <div style={style.section}>
                    <Typography variant="h6" style={style.subTitle}>Experience</Typography>
                    <Typography style={style.experienceFont}>Master’s Degree in the Science of Nurse-Midwifery (2021)</Typography>
                    <Typography style={style.experienceFont}>Certified Nurse Midwife through AMCB (2021)</Typography>
                    <Typography style={style.experienceFont}>APRN Kentucky License (2021)</Typography>
                    <Typography style={style.experienceFont}>Registered Nurse in Labor &amp; Delivery and Postpartum (2016)</Typography>
                    <Typography style={style.experienceFont}>Midwifery Clinical Experience in the Home Setting </Typography>
                    <Typography style={style.experienceFont}>Neonatal Resuscitation Certified</Typography>
                    <Typography style={style.experienceFont}>BLS CPR Certified</Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default About;