import React, { useState } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Card, CardMedia, CardHeader } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import '@fontsource/roboto';

const Services = () => {

    const colorScheme = {
        prenatalCard: "white",
        laborCard: "white",
        newBornCard: "white",
        title: "black",
        font: "black",
    }

    const style = {
        body: {

        },
        prenatal: {
            backgroundColor: colorScheme.prenatalCard,
            color: "black",
            margin: "1%",
            padding: "5%",
            height: 250
        },
        labor: {
            backgroundColor: colorScheme.laborCard,
            color: "black",
            margin: "1%",
            padding: "5%",
            height: 250
        },
        newborn: {
            backgroundColor: colorScheme.newBornCard,
            color: "black",
            margin:"1%",
            padding: "5%",
            height: 250
        },
        title: {
            borderBottom: "1px dashed black"
        },
        heart: {
            color: "#ff3399",
            fontSize: 30
        },
        subtitle: {
            color: "#E68FAE",
            fontWeight: "bold",
            fontSize: 25
        }
    }

    return (
        <Grid container direction="row" alignItems="center" justifyContent="center">
            {/* <Grid item md="12" xs="12">
                <Typography style={style.title}>Our Services</Typography>
            </Grid> */}
            <Grid item md="4" xs="12">
                <div style={style.prenatal}>
                    <FavoriteIcon style={style.heart}/>
                    <Typography variant="subtitle1" style={style.subtitle}>Pregnancy</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                </div>
            </Grid>
            <Grid item md="4" xs="12">
                <div style={style.labor}>
                    <FavoriteIcon style={style.heart}/>
                    <Typography variant="subtitle1" style={style.subtitle}>Labor & Birth</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                </div>
            </Grid>
            <Grid item md="4" xs="12">
                <div style={style.newborn}>
                    <FavoriteIcon style={style.heart}/>
                    <Typography variant="subtitle1" style={style.subtitle}>Postpartum & Newborn</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                </div>
            </Grid>
            
        </Grid>
    )
}

export default Services;