import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import '@fontsource/roboto';

const Resources = () => {
    //Nav Rendering for Smartphone vs Laptop
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    //Colors
    const colorScheme = {
        serviceCard: "white",
        title: "#E68FAE",
        font: "black",
    }
    //Style
    const style = {
        serviceCard: {
            backgroundColor: colorScheme.serviceCard,
            color: "black",
            margin: "3%",
            height: (!isDesktop) ? 30 : 20,
            padding: (!isDesktop) ? 5 : 0
        },
        title: {
            borderBottom: "1px dashed black"
        },
        heart: {
            color: "#ff3399",
            fontSize: 30
        },
        subtitle: {
            color: colorScheme.title,
            fontWeight: "bold",
            fontSize: 25
        },
        link: {
            color: "#ff3399",
            textDecoration: 'none',
            fontWeight: "bold",
            marginTop: "4%"
        }
    }

    return (
        <>
            <Grid item md="12" xs="12" style={style.serviceCard}>
                <a href="https://www.spinningbabies.com" target="_blank" style={style.link}>Spinning Babies</a>
            </Grid>
            <Grid item md="12" xs="12" style={style.serviceCard}>
                <a href="http://www.milescircuit.com" target="_blank" style={style.link}>Miles Circuit</a>
            </Grid>
            <Grid item md="12" xs="12" style={style.serviceCard}>
                <a href="https://evidencebasedbirth.com" target="_blank" style={style.link}>Evidence Based Birth</a>
            </Grid>
            <Grid item md="12" xs="12" style={style.serviceCard}>
                <a href="https://onlinelibrary.wiley.com/page/journal/15422011/homepage/share-with-women" target="_blank" style={style.link}>For Women</a>
            </Grid>
        </>
    )
}

export default Resources;