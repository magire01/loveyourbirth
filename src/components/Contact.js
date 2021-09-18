import React, { useState } from "react";
import { Grid, Paper, Typography, CardHeader } from "@material-ui/core";
import '@fontsource/roboto';

const Contact = () => {
    //Style
    const style = {
        card: {
            marginTop: 5,
            marginBottom: 0,
            paddingTop: 20,
            paddingBottom: 40,
            backgroundColor: "#A9D1EA",
            color: "white",
            borderRadius: 5
        }
    }
    return (
        <Grid container direction="row">
            <Grid item md="12" xs="12">
                <Paper style={style.card} elevation="5">
                    <CardHeader title="Contact" />
                    <Grid container direction="row" alignItems="center">
                        <Grid item md="4" xs="12">
                            <Typography>Phone: 555-555-5555</Typography>
                        </Grid>
                        <Grid item md="4" xs="12">
                            <Typography>Email: mag@gmail.yeet</Typography>
                        </Grid>
                        <Grid item md="4" xs="12">
                            <Typography>PO Box: 123252</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Contact;