import React, { useState } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Card, CardMedia, CardHeader } from "@material-ui/core";

import '@fontsource/roboto';

const Services = () => {

    const style = {
        body: {

        },
        prenatal: {
            backgroundColor: "#F6D2E0",
            color: "black",
            margin: "2%",
            padding: "5%",
            height: 250
        },
        labor: {
            backgroundColor: "#F8B7CD",
            color: "black",
            margin: "2%",
            padding: "5%",
            height: 300
        },
        newborn: {
            backgroundColor: "#F6D2E0",
            color: "black",
            margin:"2%",
            padding: "5%",
            height: 250
        }
    }

    return (
        <Grid container direction="row" alignItems="center" justifyContent="center">
            <Grid item md="4" xs="12">
                <Card style={style.prenatal}>
                    <CardHeader title="Prenatal" />
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                </Card>
            </Grid>
            <Grid item md="4" xs="12">
                <Card style={style.labor}>
                    <CardHeader title="Labor and Birth" />
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>

                </Card>
            </Grid>
            <Grid item md="4" xs="12">
                <Card style={style.newborn}>
                    <CardHeader title="Newborn" />
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                    <Typography>SomeTextHere</Typography>
                </Card>
            </Grid>
            
        </Grid>
    )
}

export default Services;