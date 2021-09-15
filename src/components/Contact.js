import React, { useState } from "react";
import { Grid, Paper, Button, Drawer, List, ListItem, Typography, IconButton, Modal, Card, CardHeader } from "@material-ui/core";

import ContactForm from "./ContactForm";
import MessageForm from "./MessageForm";

import '@fontsource/roboto';

const Contact = () => {

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
                <Paper style={style.card}>
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