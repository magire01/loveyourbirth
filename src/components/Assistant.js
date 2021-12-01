import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import '@fontsource/roboto';
import ProfilePic from "../Kaily1.png";

const Assistant = () => {

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
            width: (!isDesktop) ? 200 : 250,
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
                <Typography variant="h4" style={style.title}>Kaily Jones</Typography>
            </Grid>
            <Grid item md="8" xs="12">
                <Typography style={style.aboutFont}>I’ve been drawn to birth and pregnancy ever since I can remember, but I discovered my true love for the process
                when I experienced it firsthand. Bringing my sons into the world was a pivotal moment for me as a woman. Both of
                my experiences allowed me to grow as a person but my unmedicated birth with my youngest child really allowed
                me to see so much potential and strength within. Labor is sacred and has so much potential to be very healing and
                empowering. It is an honor to stand by other women as they get to go through their own journey of motherhood
                and to support them in the comfort of their own space. I live in Northern Kentucky with my husband and two boys.
                I love spending quality time with family and friends, reading, cooking, and being in nature.</Typography>
                <div style={style.section}>
                    <Typography variant="h6" style={style.subTitle}>Experience</Typography>
                    <Typography style={style.experienceFont}>Neonatal Resuscitation Certified</Typography>
                    <Typography style={style.experienceFont}>BLS CPR Certified</Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default Assistant;