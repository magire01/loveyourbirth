import React, { useState, useEffect } from "react";
import { Grid, Typography, CardMedia } from "@material-ui/core";
import '@fontsource/roboto';
import ProfilePic from "../krystal.png";

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
            fontSize: 30,
            borderBottom: "3px solid #730099",
            borderRight: "3px solid #730099",
            backgroundColor: "#E68FAE",
            margin: "auto",
            borderRadius: 5,
            width: "60%"
        },
        picture: {
            width: "80%",
            height: "auto",
            marginTop: (!isDesktop) ? 20 : 20,
            borderRadius: 60,
            border: "2px solid #730099"
        },
        picture2: {
            width: (!isDesktop) ? "100%" : "30%",
            height: "auto"
        },
        title: {
            fontSize: (!isDesktop) ? 30 : 40,
            color: "#730099"
        },
        section: {
            marginTop: "0%"
        },
        card: {
            padding: 20,
            margin: "5%",
            width: "auto%",
            height: "auto",
            marginBottom: 20,
            borderRadius: 20
        },
        card2: {
            padding: 10,
            margin: 15
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
        }
    }
    return (
        <Grid container direction="row" alignItems="center">
            <Grid item md="6" xs="12" style={style.section}>
                <div style={style.card}>
                    {(!isDesktop)
                        ?
                        <>
                            <Typography variant="h4" style={style.title}>Krystal Smith,</Typography>
                            <Typography variant="h4" style={style.title}>MSN, APRN, CNM</Typography>
                        </>
                        : <Typography variant="h4" style={style.title}>Krystal Smith, MSN, APRN, CNM</Typography>
                    }
                    <CardMedia>
                        <img src={ProfilePic} style={style.picture}/>
                    </CardMedia>
                </div>
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